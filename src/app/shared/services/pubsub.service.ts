import { Injectable, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './storage.service';
import { project_id } from 'src/constants/const';
declare const MVDOTOK: any;

@Injectable()
export class PubsubService implements OnDestroy {
  @Output()
  protected wsSubscription: Subscription;
  public Client: any;

  constructor() { }


  public ngOnDestroy(): void {
    this.wsSubscription.unsubscribe();
  }


  public initConfigure(): void {
    const user = StorageService.getUserData();
    this.Client = new MVDOTOK.Client({
      projectID: project_id,//"1KMMRG",
      host: `${user.messaging_server_map.complete_address}`,
      stunServer: `${user.stun_server_map ? user.stun_server_map.complete_address : ''}`
    });
    this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
  }


  public sendMessage(message): void {
    this.Client.SendMessage(message);
  }

  public subscribeToChat(groups): void {
    groups.map(chanelObj => {
      this.Client.Subscribe(chanelObj);
    });
  }


  public unsubscribeToChat(groups): void {
    this.Client.UnSubscribe(groups);
  }


  public Disconnect(): void {
    this.Client.Disconnect();
  }


  readMessage(chatMessages) {
    chatMessages.map(chat => {
      this.Client.SendReceipt(chat);
    });
  }


  readSingleMessage(chatMessages) {
    this.Client.SendReceipt(chatMessages);
  }

  
  sendNotificationOnGroupUpdation(obj) {
    console.log("** sendNotificationOnGroupUpdation")
    this.Client.SendNotification(obj);
  }

}
