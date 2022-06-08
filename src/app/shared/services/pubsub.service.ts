import { Injectable, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StorageService } from './storage.service';
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
    let user = StorageService.getUserData();
    this.Client = new MVDOTOK.Client({
      projectID: "123DGDVB",
      secret: "462a4b478d515fd35eae075eea059d89",
      host: `${user.messaging_server_map.protocol}://${user.messaging_server_map.host}:${user.messaging_server_map.port}`
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

}
