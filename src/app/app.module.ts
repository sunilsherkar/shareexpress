import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit,ViewChild } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 import { Storage } from '@ionic/storage';
 import { ImageService } from '../app/pages/service/image.service';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { IonicStorageModule } from '@ionic/storage';
 import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
 
import { FilePath } from '@ionic-native/file-path/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx'; 
 
import { Base64 } from '@ionic-native/base64/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx'; 
import { Injectable } from '@angular/core';
import { VideoEditor } from '@ionic-native/video-editor/ngx';
 
 @Injectable()

 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,HttpClientModule]
   , 
  providers: [
    StatusBar,
    SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
      , File,  FileChooser,
        FileOpener, FilePath, ImagePicker
      , Base64, Downloader, SocialSharing, ImageService,HTTP,VideoEditor],
  bootstrap: [AppComponent]
})


export class AppModule {}
