import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/Inbox',
      //icon: 'home'
    },{
      title: 'Localização',
      url: '/geolocalizacao',
      //icon: 'location'
    },{
      title: 'Eletricidade',
      url: '/eletricidade',
      //icon: 'flash'
    }, {
      title: 'Bluetooth',
      url: '/bluetooth',
      //icon: 'bluetooth'
    },];
  
   
  //   {
  //     title: 'Favorites',
  //     url: '/folder/Favorites',
  //     icon: 'heart'
  //   },
  //   {
  //     title: 'Archived',
  //     url: '/folder/Archived',
  //     icon: 'archive'
  //   },
  //   {
  //     title: 'Trash',
  //     url: '/folder/Trash',
  //     icon: 'trash'
  //   },
  //   {
  //     title: 'Spam',
  //     url: '/folder/Spam',
  //     icon: 'warning'
  //   }
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(true);
      this
      this.statusBar.backgroundColorByHexString('#002f6c');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
