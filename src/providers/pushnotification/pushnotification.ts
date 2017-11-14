import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import {Platform} from 'ionic-angular';

/*
  Generated class for the PushnotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal, public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');

  }

  initNotifications() {

    if(this.platform.is('cordova')){

      this.oneSignal.startInit('c3da1a13-a978-427f-aab9-f0d4d929bf0c', '160338014506');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        console.log("Notificacion recibida")
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log("Notificacion abierta")
      });

      this.oneSignal.endInit();
    }else{
      console.log("OneSignal no funciona en Chrome")
    }
  }
}
