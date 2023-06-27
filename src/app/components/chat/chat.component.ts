import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from "@angular/core";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { fromEvent } from "rxjs/internal/observable/fromEvent";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { map } from "rxjs/internal/operators/map";
import { FindArrayObject } from "src/app/shared/helpers/helpersFunctions";
import { BaseService } from "src/app/shared/services/base.service";
import { PubsubService } from "src/app/shared/services/pubsub.service";
import { StorageService } from "src/app/shared/services/storage.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import FormsHandler from "src/app/shared/FormsHandler/FormsHandler";
import {
  MessageModel,
  onlineOfflineModel,
  receiptModel,
  typingModel,
} from "src/app/shared/models/chat";
import axios from "axios";
import { environment } from "src/environments/environment";

@Component({
  selector: "chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
})
export class ChatComponent implements OnInit {
  @Output() setActiveChatt = new EventEmitter<string>();
  @Output() changeEvent = new EventEmitter<string>();
  editGroupModel = false;
  groupForm: FormGroup;
  loading = true;
  AllGroups = [];
  activeChat: any = {
    chatHistory: [],
  };
  message = "";
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  @ViewChild("messageInputElement") messageInputElement: ElementRef;
  threadType = "THREAD";
  fileToSend: File = null;
  isActiveThread = false;
  popupimagesrc = "";
  screen = "CHAT";
  sdkconnected = false;
  setToActive = null;
  constructor(
    public pubsubService: PubsubService,
    private svc: BaseService,
    private router: Router,
    private elRef: ElementRef,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private changeDetector: ChangeDetectorRef,
    private _fb: FormBuilder
  ) {
    this.groupForm = this._fb.group(
      {
        group_id: new FormControl("", [Validators.required]),
        group_title: new FormControl("", [
          Validators.required,
          Validators.maxLength(100),
        ]),
      },
      { updateOn: "change" }
    );
    this.pubsubService.initConfigure();
  }

  ngOnInit() {
    this.pubsubService.Client.on("connect", (response) => {
      console.log("*** on-connect response:\n", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });
    this.pubsubService.Client.on("register", (response) => {
      console.log("*** on-register response:\n", response);
    });
    this.pubsubService.Client.on("disconnect", (response) => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });

    document.addEventListener("keyup", (event) => {
      if (event.code === "Enter") {
        this.sendTextMessage();
      }
    });
  }

  ngAfterViewInit(): void {
    this.pubsubService.Client.on("authentication_error", (res: any) => {
      console.log("authentication_error", res);
    });

    this.pubsubService.Client.on("offline", (response) => {
      console.log("*** on-offline", response);
      this.setOfflineStatus(response);
    });

    this.pubsubService.Client.on("online", (response: onlineOfflineModel) => {
      console.log("*** on-online", response);
      this.setOnlineStatus(response);
    });

    this.pubsubService.Client.on("subscribed", (response) => {
      console.log("subscribed", response);
      this.setOnlineStatusforSubscribe(response);
    });

    this.pubsubService.Client.on("message", (response) => {
      response = JSON.parse(JSON.stringify(response));
      console.log("**** on-message response: \n\n", response);

      //console.trace("new message", response);
      if (response.data) {
        this.updateGroup(response);
      }
      if (response.type == "text" || response.type == "ftp" || response.type == "file" || response.type == "image" || response.type == "audio" ||response.type == "video")
      {
        //console.log("**** on-message response: \n\n", response);


        this.scroll();
        const chatthread = this.findChatThread(response.to);

        const isActiveThread = chatthread.id == this.activeChat.id;
        chatthread["unReadCount"] = isActiveThread? 0 : (chatthread["unReadCount"] || 0) + 1;
        response = this.messageBy(chatthread, response);
        response["isRead"] = isActiveThread;
        response["auto_created"] = chatthread["auto_created"];
        chatthread["lastMessage"] = response.content;
        chatthread["time"] = new Date(response.id);
        chatthread["type"] = response.type;
        if(response.subType) {
          response["subType"] = response.subType;
          chatthread["subType"] = response.subType;

        }

        //console.log("****asdfghjkjhgfds:\n", {response}, {chatthread});
        


        this.pushMessage(chatthread, response);
        this.readSingleMessage(response, isActiveThread);
        setTimeout(() => {
          this.AllGroups.sort((a, b) => {
            return a.id == chatthread.id ? -1 : 1;
          });
        }, 500);

        this.changeDetector.detectChanges();
      }

      //---------------------------------//
      else if (response.type == "typing") {
        this.setUserTyping(response);
      } else if (response.receiptType == 3) {
        let chName = response.topic || response.to;
        if (response.to != undefined) chName = response.to;
        const chatthread = this.findChatThread(chName);
        const message = FindArrayObject(
          chatthread.chatHistory,
          "id",
          response.messageId
        );
        if (message) {
          message["readCount"] = (message["readCount"] || 0) + 1;
        }
        this.changeDetector.detectChanges();
      }
    });

    if (this.messageInputElement) {
      fromEvent(this.messageInputElement.nativeElement, "input")
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(800), //3000 => changed this because 0 for typing goes after some seconds to the receiver
          distinctUntilChanged()
        )
        .subscribe((data) => {
          const sendMessage: MessageModel = {
            type: "typing",
            content: "0",
            to: this.activeChat.channel_name,
            key: this.activeChat.channel_key,
            status: 0,
            size: 0,
            isGroupMessage: false,
            from: StorageService.getAuthUsername(),
            id: new Date().getTime().toString(),
            date: new Date().getTime(),
          };
          this.pubsubService.sendMessage(sendMessage);
        });
    }
  }



















  updateGroup(grp_info) {
    let new_group = grp_info.data.groupModel.group;
    console.log(
      "$$$$ in update group function \n\n",
      { grp_info },
      { new_group }
    );

    // return;
    if (grp_info.data.action == "new") {
      let i = this.AllGroups.findIndex(
        (grp) => grp.channel_name == new_group.channel_name
      );

      if (i === -1) {
        let chat = grp_info.data.groupModel.group;
        let subscribedata = {
          key: chat.channel_key,
          channel: chat.channel_name,
        };
        let data = [];
        data.push(subscribedata);
        this.pubsubService.subscribeToChat(data);
        console.log("!!!!!! grp", subscribedata);

        //this.pubsubService.subscribeToChat(data);
        if (chat["participants"].length) {
          chat["participants"] = chat["participants"].map((r) => {
            r["username"] = r["username"] || r["full_name"];
            return r;
          });
        }


        chat["chatTitle"] = chat.auto_created
          ? chat.group_title.split("-")[0]//chat["participants"][0]["full_name"]
          : chat.group_title;



        chat["Online"] = false;
        chat["key"] = chat.channel_key;
        chat["channel"] = chat.channel_name;
        chat["chatHistory"] = [];
        chat["TotalParticipants"] = chat["participants"].length;
        chat["onlineParticipants"] = 1;
        chat["isSeen"] = true;
        console.log(
          "!!!mmmmmmmmmm final grp before pushing: \n\n",
          // this,
          "\n",
          chat,
          "\n\n",
          // this.AllGroups
        );

        this.AllGroups.push(chat);
        // this.setActiveChat(chat);
        this.changeEvent.emit("THREAD");
        //chat.clicked_item = "chat";
        this.setActiveChatt.emit(chat);
        this.loading = false;

        // console.log("** group added successfully\n", grp_info, "\n");  //{new_group}, {index}, this.AllGroups
      }
    }

    if (grp_info.data.action == "delete") {
      //console.log("$$ group deleted successfully-before\n" , this.AllGroups);
      // let cn = grp_info.data.groupModel;
      let index = this.AllGroups.findIndex(
        (grp) => grp.channel_name == new_group.channel_name
      );
      if (index > -1) {
        this.AllGroups.splice(index, 1);
        this.pubsubService.unsubscribeToChat({
          key: new_group.channel_key,
          channel: new_group.channel_name,
        });
        this.activeChat = {};
        this.changeDetector.detectChanges();
      }
      console.log(
        "1234** group deleted successfully\n",
        grp_info,
        "\n",
        this.activeChat,
        this.loading,
        !this.activeChat.chatTitle && !this.loading
      ); //{new_group}, {index}, this.AllGroups
    }

    if (grp_info.data.action == "modify") {
      let grp_ind = this.AllGroups.findIndex(
        (g) => g.channel_name === new_group.channel_name
      );
      // console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n");
      if (grp_ind > -1) {
        this.AllGroups[grp_ind].group_title = new_group.group_title;
        this.AllGroups[grp_ind].chatTitle = new_group.group_title;
        //console.log("*** edit notification:\n", new_group, "\n", this.AllGroups, "\n",new_group.group.group_title);
      }
    }
  }











  editGroup() {
    FormsHandler.validateForm(this.groupForm);
    console.error("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post("RenameGroup", playload).subscribe((v) => {
      if (v && v.status == 200) {
        //this.getAllGroups(); //Commented this on 22-May-23 because chat history removed when rename group called

        if (
          this.activeChat.group_id === playload.group_id &&
          this.activeChat.auto_created === 0
        ) {
          console.log("&& rename group api calleds", this.activeChat, playload);
          this.activeChat.group_title = playload.group_title;
          this.activeChat.chatTitle = playload.group_title;
        }

        //ABM
        let participants_ref_ids = [];
        v.group.participants.map((p) => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "modify",
          groupModel: v,
        };
        console.log(
          "TT *** edit grppp  -sending side:\n",
          groupInfo,
          "/nAPI response:",
          v
        );
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM

        this.editGroupModel = false;
        this.loading = false;
        this.toastr.success("The group has been updated!", "Success!");
      }
    });
  }
  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id,
    };
    this.svc.post("DeleteGroup", playload).subscribe((v) => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.loading = false;

        let i = this.AllGroups.findIndex((g) => g.id === group.id);
        this.AllGroups.splice(i, 1);
        console.log("TTTT ** delete group: ", this.AllGroups, { group }, i);

        //AMB
        let participants_ref_ids = [];
        group.participants.map((p) => {
          participants_ref_ids.push(p.ref_id);
        });
        const groupInfo = {
          from: StorageService.getUserData().ref_id,
          to: participants_ref_ids,
          action: "delete",
          groupModel: v,
        };
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //ABM

        //this.getAllGroups(); //commented because all groups updated and chat removed
        this.activeChat = {};
        this.loading = false;
        this.toastr.success("The group has been deleted!", "Success!");
      } else {
        console.error(v.message);
        alert(v.message);
        this.changeDetector.detectChanges();
      }
    });
  }
  addNewGroupToAllGroup(group) {
    this.setToActive = group.id; //jugaar
    console.log(
      "aaaa - addNewGroupToAllGroup:  ",
      group,
      "\n",
      this.setToActive
    );
    let chat = group;
    if (chat["participants"].length) {
      chat["participants"] = chat["participants"].map((r) => {
        r["username"] = r["username"] || r["full_name"];
        return r;
      });
    }
    chat["chatTitle"] = chat.auto_created
      ? chat.group_title.split("-")[1]
      : chat.group_title;
    //chat.auto_created? chat["participants"][0]["full_name"] : chat.group_title;
    chat["Online"] = false;
    chat["key"] = chat.channel_key;
    chat["channel"] = chat.channel_name;
    chat["chatHistory"] = [];
    chat["TotalParticipants"] = chat["participants"].length;
    chat["onlineParticipants"] = 1;
    chat["isSeen"] = true;

    this.AllGroups.push(chat);
    console.log(
      "aaa allgroups:\n\n",
      this.AllGroups,
      chat["participants"][0]["full_name"]
    );
    //======================//
    // **** Subscribing group ****:
    let subscribedata = {
      key: chat.channel_key,
      channel: chat.channel_name,
    };
    let data = [];
    data.push(subscribedata);
    this.pubsubService.subscribeToChat(data);
    // **** Subscribing group ****:
    //======================//
    if (!this.activeChat.chatTitle) {
      this.activeChat = this.AllGroups.length ? this.AllGroups["0"] : {};
    }
    if (this.setToActive) {
      const indexchat = this.AllGroups.find(
        (group) => group.id == this.setToActive
      );
      this.activeChat = indexchat ? indexchat : this.AllGroups["0"];
      this.setToActive = null;
    }
    this.isActiveThread = true;

    setTimeout(() => {
      this.sortThread();
    }, 500);
    this.changeDetector.detectChanges();
  }
  getAllGroups() {
    this.loading = true;
    this.svc.get("AllGroups").subscribe((v) => {
      this.loading = false;
      if (v && v.status == 200) {
        this.AllGroups = v.groups.map((chat) => {
          if (chat["participants"].length) {
            chat["participants"] = chat["participants"].map((r) => {
              r["username"] = r["username"] || r["full_name"];
              return r;
            });
          }
          chat["chatTitle"] = chat.auto_created
            ? chat["participants"][0]["full_name"]
            : chat.group_title;
          chat["Online"] = false;
          chat["key"] = chat.channel_key;
          chat["channel"] = chat.channel_name;
          chat["chatHistory"] = [];
          chat["TotalParticipants"] = chat["participants"].length;
          chat["onlineParticipants"] = 1;
          chat["isSeen"] = true;
          return chat;
        });
        console.log("this.activeChat.chatTitle", this.activeChat);
        if (!this.activeChat.chatTitle) {
          this.activeChat = this.AllGroups.length ? this.AllGroups["0"] : {};
        }
        if (this.setToActive) {
          const indexchat = this.AllGroups.find(
            (group) => group.id == this.setToActive
          );
          this.activeChat = indexchat ? indexchat : this.AllGroups["0"];
          this.setToActive = null;
        }
        this.isActiveThread = true;
        this.pubsubService.subscribeToChat(this.AllGroups);
      }
      setTimeout(() => {
        this.sortThread();
      }, 500);
      this.changeDetector.detectChanges();
    });
  }

  /* ======================================================================================================================= */
  changeSidebar($event) {
    this.threadType = $event.event;
    console.log("changeSidebar:  ", $event);

    if (this.threadType == "THREAD") {
      this.addNewGroupToAllGroup($event.group);
      //this.getAllGroups(); //commented on 24-May-23 because all chat removed
    }
  }
  setActiveChat(group) {
    console.log("aaaa - setActiveChat:  , ", group);

    this.isActiveThread = group.id == this.activeChat.id;
    if (!this.isActiveThread) this.message = "";
    this.activeChat = group;
    group["unReadCount"] = 0;
    this.screen = "MSG";
    this.scroll();
    group.chatHistory = group.chatHistory || [];
    this.readsendMessage(group.chatHistory);
    this.changeDetector.detectChanges();
  }
  //Called when group created:
  setchat(chat) {
    console.log("**** aaaa - setChat: ", chat);

    this.setToActive = chat.id; //chat.id
    this.addNewGroupToAllGroup(chat);
  }

  openModal(group) {
    if (group.auto_created) {
      alert("Can not change One to one group title");
      return;
    }
    group["group_id"] = group.id;
    this.groupForm.reset(group);
    this.editGroupModel = true;
    this.changeDetector.detectChanges();
  }
  checkFileType(content: any) {
    let preview = content.includes("txt")  //text/plain
      ? "./assets/images/txt.png"
      : content.includes("pdf")
      ? "./assets/images/pdf.png"
      : content.includes("json")
      ? "./assets/images/json.png"
      : "./assets/images/Document.png"//"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png";


    //if (content.includes("video/")) preview = "./assets/images/video.png";
    //if (content.includes("audio/")) preview = "./assets/images/audio.png";
    //console.log("**** file preview: ", content, "\n", preview);
    
    return preview;
  }
  fileType(content: any) {
    return content.split(";")[0].split(":")[1];
  }
  findChatThread(channel) {
    return FindArrayObject(this.AllGroups, "channel_name", channel);
  }
  readSingleMessage(response, isActiveThread) {
    if (response.from == this.currentUserName || !isActiveThread) return;
    const chatobj: receiptModel = {
      messageId: response.id,
      receiptType: 3,
      from: StorageService.getAuthUsername(),
      key: response.key,
      to: response.to,
      date: new Date().getTime(),
    };
    this.pubsubService.readSingleMessage(chatobj);
  }
  readsendMessage(chatHistory) {
    const unreadchatHistory = chatHistory
      .filter((chat) => !chat.isRead)
      .map((chat) => {
        const chatobj: receiptModel = {
          receiptType: 3,
          messageId: chat.id,
          from: StorageService.getAuthUsername(),
          key: chat.key,
          to: chat.to,
          date: new Date().getTime(),
        };
        return chatobj;
      });
    if (unreadchatHistory.length)
      this.pubsubService.readMessage(unreadchatHistory);
    chatHistory = chatHistory.map((chat) => {
      chat.isRead = true;
      return chat;
    });
  }
  handleFileInput(files: FileList) {
    this.fileToSend = files.item(0);
  }
  invalidSize() {
    return this.fileToSend.size / 1024 > 6144;
  }
  removeAttachment() {
    this.fileToSend = null;
  }



  sendTextMessage() {
    if (!/\S/.test(this.message) && !this.fileToSend) {
      return;
    } else if (this.message.length > 400) {
      this.toastr.error("Message can not be more than 400 characters", "Opps!");
      return;
    } else if (this.fileToSend && this.invalidSize()) {
      this.toastr.error("The maximum size of file should be 6MBs.", "Opps!");
      this.fileToSend = null;
      return;
    }
    this.scroll();
    if (!this.message && !this.fileToSend) return;


    // ************ Sending file here ************ : 
    if (this.fileToSend) {
      //------- Changing File Sharing Procedure to FTP -------//
      let formData = new FormData(); // Currently empty
      let ext = this.getExtension(this.fileToSend.name);
      let subtype = this.getFileType(this.fileToSend);
      let sizeOfFile = this.fileToSend.size;


      formData.append("type", "ftp");
      formData.append("uploadFile", this.fileToSend);
      formData.append("auth_token", this.currentUserData.auth_token);
      formData.append("request_type", "web");
      formData.append("extension", ext);


    
      // subtype = this.getFileType(this.fileToSend);
      // sizeOfFile = this.fileToSend.size;
      console.log("**** Name of the selected file:    ", this.fileToSend.name,"\n\nFile:  ",this.fileToSend.size, "\n\nSubType:     ", subtype, "\n\nExtention:     ", ext);

      
      axios
        .post(`${environment.apiBaseUrl}s3upload/`, formData)
        .then((response: any) => {
          if (response.data.status === 200) {
            const option = {
              type: "ftp",
              content: response.data.file_name,
              to: this.activeChat.channel_name,
              key: this.activeChat.channel_key,
              subType: subtype, //0
              id: new Date().getTime().toString(),
              from: StorageService.getAuthUsername(),
              topic: this.activeChat.channel_name,
              date: new Date().getTime(),
              status: 1,
              isGroupMessage: false,
              size: sizeOfFile,//0,

            };
            console.log("**** OPTIONS:  \n\n", option);

            this.pubsubService.sendMessage(option);
          }
        });
      this.fileToSend = null;
      //------- Changing File Sharing Procedure to FTP -------//

      return;
      // this.pubsubService.Client.SendFile(this.fileToSend, option);
    }
    if (!this.message) return;
    const sendMessage: MessageModel = {
      type: "text",
      content: this.message,
      to: this.activeChat.channel_name,
      key: this.activeChat.channel_key,
      status: 1,
      size: 0,
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      id: new Date().getTime().toString(),
      date: new Date().getTime(),
    };
    this.pubsubService.sendMessage(sendMessage);
    this.message = "";
    this.scroll();
    if (
      !(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)
    ) {
      this.sortThread();
    }
  }



  getExtension(filename) {
    return filename.split(".").pop();
  }
  getFileType(fileR) {
    //All cross platforms following these ENUMS:
    // int image = 0;
    // int audio = 1;
    // int video = 2; 
    // int file = 3; 
    let type = 3; //"file";
    const filetype = fileR.type;
    // console.log("*** file type", fileR, filetype);
    if (filetype.includes("image")) type = 0;//"image";
    else if (filetype.includes("audio")) type = 1;//"audio";
    else if (filetype.includes("video")) type = 2//"video";
    return type;
  }
























































  
  typingmessage($event) {
    if ($event.key === "Enter") {
      this.sendTextMessage();
      return;
    }
    const sendMessage: MessageModel = {
      type: "typing",
      content: "1",
      to: this.activeChat.channel_name,
      key: this.activeChat.channel_key,
      status: 0,
      size: 0,
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      id: new Date().getTime().toString(),
      date: new Date().getTime(),
    };
    this.pubsubService.sendMessage(sendMessage);
  }

  setOnlineStatusforSubscribe(response: onlineOfflineModel) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat) {
      const onlineNumbers = [...new Set(response.who.map((n) => n.username))];
      indexchat["onlineParticipants"] =
        (onlineNumbers && onlineNumbers.length) || 1;
      if (indexchat && indexchat.auto_created)
        indexchat["Online"] = onlineNumbers.length > 1;
    }
    this.changeDetector.detectChanges();
  }
  setOnlineStatus(response: onlineOfflineModel) {
    const indexchat = this.findChatThread(response.channel);
    if (!indexchat) return;
    if (indexchat.auto_created) indexchat["Online"] = true;
    if (!indexchat.auto_created) {
      indexchat["onlineParticipants"] =
        indexchat["onlineParticipants"] < indexchat["TotalParticipants"]
          ? indexchat["onlineParticipants"] + 1
          : indexchat["onlineParticipants"];
    }
    this.changeDetector.detectChanges();
  }
  setOfflineStatus(response: onlineOfflineModel) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat && indexchat.auto_created) indexchat["Online"] = false;
    if (!indexchat.auto_created) {
      indexchat["onlineParticipants"] =
        indexchat["onlineParticipants"] > 2
          ? indexchat["onlineParticipants"] - 1
          : 1;
    }
    this.changeDetector.detectChanges();
  }
  setUserTyping(response: typingModel) {
    if (response.from == this.currentUserData.ref_id) return;
    const indexchat = FindArrayObject(
      this.AllGroups,
      "channel_name",
      response.to
    );
    const typinguser = indexchat["participants"].find(
      (e) => e.ref_id == response.from
    );
    if (response.content == "1") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"] || [];
      indexchat["TypingUserList"] = [...new Set([typinguser])];
    } else if (response.content == "0") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"].filter(
        (e) => e.ref_id != response.from
      );
    }
    indexchat["userTyping"] =
      indexchat["TypingUserList"].length && response.content != "0";
    const nameList = indexchat["TypingUserList"].map(
      (userObj) => userObj.full_name
    );
    if (nameList.length == 1) {
      indexchat["userTypingContent"] = nameList + " " + "is typing...";
    } else if (nameList.length == 2) {
      indexchat["userTypingContent"] = nameList.join() + " " + "are typing...";
    } else if (nameList.length > 2) {
      indexchat["userTypingContent"] =
        nameList.filter((i, j) => j < 2).join() +
        " " +
        "and other are typing...";
    }
    // if (indexchat && indexchat.auto_created) {
    //   indexchat['userTyping'] = response.content != '0' && response.from != this.currentUserData.ref_id;
    //   indexchat['userTypingContent'] = (response.content == '1') ? sender + " is typing..." : "";
    // } else if (indexchat && !indexchat.auto_created) {
    //   this.setMultiUserTyping(response, typinguser, indexchat);
    // }
    this.changeDetector.detectChanges();
  }
  setMultiUserTyping(response, typinguser, indexchat) {
    if (response.content == "1") {
      indexchat["TypingUserList"] = [...new Set(typinguser)];
    } else if (response.content == "0") {
      indexchat["TypingUserList"] = indexchat["TypingUserList"].filter(
        (e) => e.ref_id != response.from
      );
    }
    this.changeDetector.detectChanges();
  }
  scroll(): void {
    setTimeout(() => {
      this.elRef.nativeElement.querySelector(".messagesBox").scrollTop =
        this.elRef.nativeElement.querySelector(".messagesBox").scrollHeight;
    }, 500);
  }
  newChat() {
    this.threadType = "CHAT";
    this.changeDetector.detectChanges();
  }
  logout() {
    this.pubsubService.Disconnect();
    StorageService.clearLocalStorge();
    this.router.navigate(["login"]);
  }
  sortThread() {
    if (this.activeChat.id) {
      this.AllGroups.sort((a, b) => {
        return a.id == this.activeChat.id ? -1 : 1;
      });
    }
  }
  messageBy(chatthread, response) {
    if (this.isShowName(chatthread, response)) {
      const messageByObj = FindArrayObject(
        chatthread.participants,
        "ref_id",
        response.from
      );
      response["messageBy"] = (messageByObj && messageByObj.full_name) || "";
    }
    return response;
  }
  isShowName(chatthread, response) {
    if (chatthread["chatHistory"].length && response.from) {
      const previourmessage =
        chatthread["chatHistory"][chatthread["chatHistory"].length - 1];
      return previourmessage.from != response.from;
    }
    return true;
  }
  pushMessage(thread, response) {
    let newResponse = {};
    newResponse = JSON.parse(JSON.stringify(response));
    if (response.type == "text" || response.content) {
      //!response.content
      thread["chatHistory"].push(newResponse);
    } else {
      const foundIndex = thread.chatHistory.findIndex(
        (x) => x.id == response.id
      );
      thread.chatHistory[foundIndex] = response;
    }
  }
  getLastMessage(group): string {
    const isactivethread = group.id == this.activeChat.id;
    if (!isactivethread && group.unReadCount) {
      return "Misread messages";
    } else if (group.type === "ftp") {
      return "File";
    }
    //Commented due to change of file sharing method ftp:=
    // else if (group.type != "text") {
    //   return group.type;
    // }
    return group.lastMessage;
  }
  openImage(imagesrc): void {
    this.popupimagesrc = imagesrc;
    this.changeDetector.detectChanges();
  }
  closeImage() {
    this.popupimagesrc = null;
    this.changeDetector.detectChanges();
  }
  closeModal() {
    this.editGroupModel = false;
    this.changeDetector.detectChanges();
  }
  isHideThread() {
    return this.isMobile() ? this.screen != "CHAT" : false;
  }
  isHideChatScreen() {
    return this.isMobile() ? this.screen != "MSG" : false;
  }
  backScreen() {
    this.threadType = "THREAD";
    this.screen = "CHAT";
    this.changeDetector.detectChanges();
  }
  isMobile() {
    return window.innerWidth < 768;
  }
}
