import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { fromEvent } from "rxjs/internal/observable/fromEvent";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { map } from "rxjs/internal/operators/map";
import { mergeMap } from "rxjs/internal/operators/mergeMap";
import { BaseService } from "src/app/shared/services/base.service";
import { PubsubService } from "src/app/shared/services/pubsub.service";
import { StorageService } from "../../../shared/services/storage.service";

import { ToastrService } from "ngx-toastr";
import { startWith } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "new-chat",
  templateUrl: "./new-chat.component.html",
  styleUrls: ["./new-chat.component.scss"],
})
export class NewChatComponent implements OnInit {
  loading = true;
  AllUsers = [];
  CopyAllUsers = [];
  u_users = [];
  @Output() changeEvent = new EventEmitter<object>(); //<string>
  @ViewChild("searchInput") searchInput: ElementRef;
  @Output() setActiveChat = new EventEmitter<string>();

  constructor(
    public pubsubService: PubsubService,
    private svc: BaseService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, "input")
        .pipe(
          map((event: Event) => (event.target as HTMLInputElement).value),
          debounceTime(1000),
          distinctUntilChanged(),
          startWith(""),
          mergeMap((value) => {
            this.loading = true;
            if (!value) {
              const data = {
                sorting: "ORDER BY full_name ASC",
                search_field: "full_name",
                search_value: "",
                condition: "contains",
              };
              return this.svc.post("AllUsers", data).pipe(
                map((res) => {
                  this.u_users = res.users.filter(
                    (u) => u.ref_id !== StorageService.getUserData().ref_id
                  );
                  console.log(
                    "**** Res of All users (single chat):\n\n",
                    res,
                    this.u_users
                  );

                  if (!(this.u_users && this.u_users.length)) {
                    this.u_users = [];
                  }
                  this.CopyAllUsers = [...this.u_users];
                  return res;
                })
              );
            }
            const temparaay = [...this.CopyAllUsers];
            const filteruser = temparaay.filter((user) => {
              const searchValue = value.toLowerCase();
              if (user.full_name.toLowerCase().startsWith(searchValue)) {
                return -1;
              }
            });
            const returnData = {
              users: filteruser,
            };
            return of(returnData);
          })
        )
        .subscribe((res) => {
          this.loading = false;
          this.u_users = res.users.filter(
            (u) => u.ref_id !== StorageService.getUserData().ref_id
          );
          if (!this.u_users || !this.u_users.length) {
            this.toastr.error("No contacts found", "Opps!");
            this.AllUsers = [];
          } else {
            this.AllUsers = this.u_users;
          }
        });
    }
  }

  backScreen() {
    console.log("backscreen - new-chat");

    this.changeEvent.emit({ event: "THREAD", group: {} });
  }

  //Called when "Add Group Chat" heading clicked
  addGroupEvent() {
    this.changeEvent.emit({ event: "GROUP", group: {} });
  }

  startChat(user, val) {
    if (this.loading) return;
    this.loading = true;
    const data = {
      group_title: StorageService.getUserData().username + "-" + user.full_name, //TTuser.full_name,
      participants: [user.user_id],
      auto_created: 1,
    };
    console.log("** new group creation: ", StorageService.getUserData());

    this.svc.post("CreateGroup", data).subscribe((v) => {
      if (v && v.status == 200) {
        const subscribedata = {
          ...v.group,
          key: v.group["channel_key"],
          channel: v.group["channel_name"],
        };
        const data = [];
        data.push(subscribedata);
        this.pubsubService.subscribeToChat(data);

        //ABM
        const groupInfo = {
          from: StorageService.getUserData().ref_id,
          to: [user.ref_id],
          action: "new",
          groupModel: v,
        };
        console.log(
          "** notification send on group creation :\n\n",
          groupInfo,
          "\n\n\n\n",
          v,
          "\n",
          val
        );
        this.pubsubService.sendNotificationOnGroupUpdation(groupInfo);
        //

        this.changeEvent.emit({ event: "THREAD", group: v.group });
        v.group.clicked_item = val;
        this.setActiveChat.emit(v.group);
        this.loading = false;
      }
    });
  }
}
