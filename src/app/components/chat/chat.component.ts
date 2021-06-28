import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { map } from 'rxjs/internal/operators/map';
import { FindArrayObject } from 'src/app/shared/helpers/helpersFunctions';
import { BaseService } from 'src/app/shared/services/base.service';
import { PubsubService } from 'src/app/shared/services/pubsub.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import FormsHandler from 'src/app/shared/FormsHandler/FormsHandler';

export interface MessageModel {
  id: String,
  to: String,
  key: String,
  from: String,
  type: String,
  content: String,
  size: number,
  isGroupMessage: Boolean,
  status: number,
  date: number,
}

export interface receiptModel {
  receiptType: number,
  key: String,
  messageId: String,
  date: number,
  from: String,
  to: String,
}

export interface fileModel {
  id: String,
  from: String,
  topic: String,
  key: String,
  type: String,
  date: number
}


@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  editGroupModel = false;
  groupForm: FormGroup;
  loading = true;
  AllGroups = [];
  activeChat: any = {
    chatHistory: []
  };
  message: string = '';
  currentUserName = StorageService.getAuthUsername();
  currentUserData = StorageService.getUserData();
  @ViewChild('messageInputElement') messageInputElement: ElementRef;
  threadType = 'THREAD';
  fileToSend: File = null;
  isActiveThread = false;
  popupimagesrc = '';
  screen = 'CHAT';
  sdkconnected = false;
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
    this.groupForm = this._fb.group({
      'group_id': new FormControl('', [Validators.required]),
      'group_title': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    }, { updateOn: 'change' });
    this.pubsubService.initConfigure();
  }

  ngOnInit() {
    this.pubsubService.Client.on("connect", response => {
      console.error("connect", response);
      this.sdkconnected = true;
      if (!this.AllGroups.length) {
        this.getAllGroups();
      }
    });

    this.pubsubService.Client.on("disconnect", (response) => {
      console.log("disconnect", response);
      this.sdkconnected = false;
    });

    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.sendTextMessage();
      }
    });
  }

  ngAfterViewInit(): void {
    this.pubsubService.Client.on("authentication_error", (res: any) => {
      console.log("authentication_error", res);
    });


    this.pubsubService.Client.on("offline", response => {
      console.log("offline", response);
      this.setOfflineStatus(response);
    });

    this.pubsubService.Client.on("online", response => {
      console.log("online", response);
      this.setOnlineStatus(response);
    });

    this.pubsubService.Client.on("message", response => {
      response = JSON.parse(JSON.stringify(response));
      console.trace("new message", response);
      if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
        this.scroll();
        const chatthread = this.findChatThread(response.to);
        const isActiveThread = chatthread.id == this.activeChat.id;
        chatthread['unReadCount'] = isActiveThread ? 0 : (chatthread['unReadCount'] || 0) + 1;
        response = this.messageBy(chatthread, response);
        response['isRead'] = isActiveThread;
        response['auto_created'] = chatthread['auto_created'];
        chatthread['lastMessage'] = response.content;
        chatthread['time'] = new Date(response.id);
        chatthread['type'] = response.type;
        this.pushMessage(chatthread, response);
        this.readSingleMessage(response, isActiveThread);
        this.changeDetector.detectChanges();
      } else if (response.type == 'typing') {
        this.setUserTyping(response);
      } else if (response.receiptType == 3 || response.receiptType == 2) {
        let chName = response.topic || response.to;
        if (response.to != undefined)
          chName = response.to;
        const chatthread = this.findChatThread(chName);
        let message = FindArrayObject(chatthread.chatHistory, 'id', response.messageId);
        if (message) {
          message['readCount'] = (message['readCount'] || 0) + 1
        }
        this.changeDetector.detectChanges();
      }
    });

    this.pubsubService.Client.on("subscribed", response => {
      console.log("subscribed", response);
      this.setOnlineStatusforSubscribe(response);
    });

    if (this.messageInputElement) {
      fromEvent(this.messageInputElement.nativeElement, 'input')
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(3000),
          distinctUntilChanged()
        ).subscribe(data => {
          const sendMessage: MessageModel = {
            status: 0,
            size: 0,
            type: "typing",
            isGroupMessage: false,
            from: StorageService.getAuthUsername(),
            content: '0',
            id: new Date().getTime().toString(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name,
            date: new Date().getTime(),
          }
          this.pubsubService.sendMessage(sendMessage);
        });
    }
  }

  deleteGroup(group) {
    this.loading = true;
    const playload = {
      group_id: group.id
    }
    this.svc.post('DeleteGroup', playload).subscribe(v => {
      this.changeDetector.detectChanges();
      if (v && v.status == 200) {
        this.loading = false;
        this.getAllGroups();
        this.toastr.success('The group has been deleted!', 'Success!');
      } else {
        console.error(v.message);
        alert(v.message);
        this.changeDetector.detectChanges();
      }
    });
  }

  openModal(group) {
    if (group.auto_created) {
      alert('Can not change One to one group title');
      return;
    }
    group['group_id'] = group.id
    this.groupForm.reset(group);
    this.editGroupModel = true;
    this.changeDetector.detectChanges();
  }

  editGroup() {
    FormsHandler.validateForm(this.groupForm);
    console.error("this.groupForm.", this.groupForm.invalid);
    if (this.groupForm.invalid || this.loading) return;
    const playload = this.groupForm.value;
    this.loading = true;
    this.svc.post('RenameGroup', playload).subscribe(v => {
      if (v && v.status == 200) {
        this.getAllGroups();
        this.editGroupModel = false;
        this.loading = false;
        this.toastr.success('The group has been updated!', 'Success!');
      }
    });
  }

  getAllGroups() {
    this.loading = true;
    this.svc.get('AllGroups').subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        this.AllGroups = v.groups.map(chat => {
          if (chat['participants'].length) {
            chat['participants'] = chat['participants'].map(r => {
              r['username'] = r['username'] || r['full_name'];
              return r;
            });
          }
          chat['chatTitle'] = chat.auto_created ? chat['participants'][0]['full_name'] : chat.group_title;
          chat['Online'] = false;
          chat['key'] = chat.channel_key;
          chat['channel'] = chat.channel_name;
          chat['chatHistory'] = [];
          chat['TotalParticipants'] = chat['participants'].length;
          chat['onlineParticipants'] = 1;
          chat['isSeen'] = true;
          return chat;
        });
        this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
        this.isActiveThread = true;
        this.pubsubService.subscribeToChat(this.AllGroups);
      }

      this.changeDetector.detectChanges();
    });
  }
  checkFileType(content: any) {
    let preview = content.includes('text/plain') ? ('./assets/images/txt.png') : content.includes('/pdf') ? ('./assets/images/pdf.png') : content.includes('/json') ? ('./assets/images/json.png') : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
    if (content.includes('video/'))
      preview = './assets/images/video.png';
    if (content.includes('audio/'))
      preview = './assets/images/audio.png';
    return preview;
  }
  fileType(content: any) {
    return content.split(";")[0].split(":")[1]
  }
  findChatThread(channel) {
    return FindArrayObject(this.AllGroups, 'channel_name', channel);
  }

  setActiveChat(group) {
    this.isActiveThread = group.id == this.activeChat.id;
    if (!this.isActiveThread) this.message = '';
    this.activeChat = group;
    this.activeChat['isActive'] = true;
    this.AllGroups.map(chat => chat.isActive = false);
    group['isActive'] = true;
    group['unReadCount'] = 0;
    this.screen = 'MSG';
    this.scroll();
    this.readsendMessage(group.chatHistory);
    this.changeDetector.detectChanges();
  }


  readSingleMessage(response, isActiveThread) {
    if (response.from == this.currentUserName || !isActiveThread) return;
    const chatobj: receiptModel = {
      messageId: response.id,
      receiptType: 3,
      from: StorageService.getAuthUsername(),
      key: response.key,
      to: response.to,
      date: new Date().getTime()
    };
    this.pubsubService.readSingleMessage(chatobj);
  }

  readsendMessage(chatHistory) {
    const unreadchatHistory = chatHistory.filter(chat => !chat.isRead).map(chat => {
      const chatobj: receiptModel = {
        messageId: chat.id,
        receiptType: 3,
        from: StorageService.getAuthUsername(),
        key: chat.key,
        to: chat.to,
        date: new Date().getTime()
      };
      return chatobj;
    });
    if (unreadchatHistory.length) this.pubsubService.readMessage(unreadchatHistory);
    chatHistory = chatHistory.map(chat => {
      chat.isRead = true;
      return chat;
    });
  }

  handleFileInput(files: FileList) {
    this.fileToSend = files.item(0);
  }

  invalidSize() {
    return ((this.fileToSend.size / 1024) > 6144);
  }

  removeAttachment() {
    this.fileToSend = null;
  }

  getFileType(fileR) {
    let type = "file";
    const filetype = fileR.type;
    if (filetype.includes('image')) type = "image";
    if (filetype.includes('audio')) type = "audio";
    if (filetype.includes('video')) type = "video";
    return type;
  }

  sendTextMessage() {
    if (this.message.length > 400) {
      this.toastr.error("Message can not be more than 400 characters", "Opps!")
      return;
    } else if (this.fileToSend && this.invalidSize()) {
      this.toastr.error("The maximum size of file should be 6MBs.", "Opps!")
      this.fileToSend = null;
      return;
    }
    this.scroll();
    if (!this.message && !this.fileToSend) return;
    if (this.fileToSend) {
      var option = {
        id: new Date().getTime().toString(),
        from: StorageService.getAuthUsername(),
        topic: this.activeChat.channel_name,
        to: this.activeChat.channel_name,
        key: this.activeChat.channel_key,
        type: this.getFileType(this.fileToSend),
        date: new Date().getTime(),
      };
      this.pubsubService.Client.SendFile(this.fileToSend, option);
      this.fileToSend = null;
    }
    if (!this.message) return;
    const sendMessage: MessageModel = {
      status: 1,
      size: 0,
      type: "text",
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      content: this.message,
      id: new Date().getTime().toString(),
      date: new Date().getTime(),
      key: this.activeChat.channel_key,
      to: this.activeChat.channel_name
    }
    this.pubsubService.sendMessage(sendMessage);
    this.message = '';
    this.scroll();
    if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
      this.sortThread();
    }
  }

  typingmessage($event) {
    if ($event.key === "Enter") {
      this.sendTextMessage();
      return;
    }
    const sendMessage: MessageModel = {
      status: 0,
      size: 0,
      type: "typing",
      isGroupMessage: false,
      from: StorageService.getAuthUsername(),
      content: "1",
      id: new Date().getTime().toString(),
      key: this.activeChat.channel_key,
      to: this.activeChat.channel_name,
      date: new Date().getTime(),
    }
    this.pubsubService.sendMessage(sendMessage);
  }

  setOnlineStatusforSubscribe(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat) {
      let onlineNumbers = [...new Set(response.who.map(n => n.username))]
      indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
      if (indexchat && indexchat.auto_created) indexchat['Online'] = onlineNumbers.length > 1
    }
    this.changeDetector.detectChanges();
  }

  setOnlineStatus(response) {
    let indexchat = this.findChatThread(response.channel);
    if (!indexchat) return;
    if (indexchat.auto_created) indexchat['Online'] = true;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
    }
    this.changeDetector.detectChanges();
  }

  setOfflineStatus(response) {
    const indexchat = this.findChatThread(response.channel);
    if (indexchat && indexchat.auto_created) indexchat['Online'] = false;
    if (!indexchat.auto_created) {
      indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
    }
    this.changeDetector.detectChanges();
  }

  setUserTyping(response) {
    let indexchat = FindArrayObject(this.AllGroups, 'channel_name', response.to);
    if (indexchat) {
      let typinguser = indexchat["participants"].filter(e => e.ref_id == response.from);
      let sender = (typinguser.length > 0) ? typinguser[0].username : "";
      indexchat['userTyping'] = response.content != '0' && response.from != this.currentUserData.ref_id;
      indexchat['userTypingContent'] = (response.content == '1') ? sender + " is typing..." : "";
    }
    this.changeDetector.detectChanges();
  }

  scroll(): void {
    setTimeout(() => {
      this.elRef.nativeElement.querySelector('.messagesBox').scrollTop = this.elRef.nativeElement.querySelector('.messagesBox').scrollHeight;
    }, 500);
  }

  changeSidebar($event) {
    this.threadType = $event;
    if (this.threadType == 'THREAD') {
      this.getAllGroups();
    }
  }

  newChat() {
    this.threadType = 'CHAT';
    this.changeDetector.detectChanges();
  }

  logout() {
    this.pubsubService.Disconnect();
    StorageService.clearLocalStorge();
    this.router.navigate(['login']);
  }

  sortThread() {
    this.AllGroups.sort((a, b) => {
      return a.id == this.activeChat.id ? -1 : 1;
    });
  }

  messageBy(chatthread, response) {
    console.error("messageBy isShowName", this.isShowName(chatthread, response));
    if (this.isShowName(chatthread, response)) {
      const messageByObj = FindArrayObject(chatthread.participants, 'ref_id', response.from);
      response['messageBy'] = messageByObj && messageByObj.full_name || '';
    }
    return response;
  }

  isShowName(chatthread, response) {
    if (chatthread['chatHistory'].length && response.from) {
      const previourmessage = chatthread['chatHistory'][chatthread['chatHistory'].length - 1];
      return previourmessage.from != response.from;
    }
    return true;
  }

  pushMessage(thread, response) {
    let newResponse = {};
    newResponse = JSON.parse(JSON.stringify(response));
    if (response.type == 'text' || !response.content) {
      thread['chatHistory'].push(newResponse);
    } else {
      var foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
      thread.chatHistory[foundIndex] = response;
    }
  }

  getLastMessage(group): string {
    const isactivethread = group.id == this.activeChat.id;
    if (!isactivethread && group.unReadCount) {
      return "Misread messages"
    } else if (group.type != 'text') {
      return group.type;
    }
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
    return this.isMobile() ? this.screen != 'CHAT' : false;
  }

  isHideChatScreen() {
    return this.isMobile() ? this.screen != 'MSG' : false;
  }

  backScreen() {
    this.threadType = "THREAD";
    this.screen = "CHAT";
    this.changeDetector.detectChanges();
  }

  isMobile() {
    return window.innerWidth < 768
  }

}