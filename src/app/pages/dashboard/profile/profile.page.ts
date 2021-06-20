
import { Component, OnInit,ViewChild } from '@angular/core';
import { File, Entry } from '@ionic-native/file/ngx';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import {AuthenticationService} from '../../service/authentication.service';
import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import {ImageService} from '../../service/image.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Base64 } from '@ionic-native/base64/ngx'; 
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { ExpandableHeaderDirective } from '../../directives/expandable-header.directive';


export interface MyData {
  name: string;
  filepath: string;
  size: number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {
      selectedfile : any;
      data: any = [];
      UserID: any = '';
      password: any = ""; 
      userlist : any = [];
      fullName : any = "";
      @ViewChild('btn1') btn1:any;
      thumbFile= [];
      saveFile = [];
      thumbnailData: any = "";
      thumbImageName : any ="";
      VideoFilepath : any ="";  
      loading : any;
      savefiles1 = [];
      savefiles2 = [];
      bigImg = null;
      bigSize = '0'; 
      smallImg = null;
      smallSize = '0';
      nativePathImg : any; 
      bigImageName : any ;
      SelfData: Observable<any>;
      MyFiles  :any;
      UploadUserProfilePath :any;
      ThumbPath :string ="" ;
      FullName :string ="" ;
      TotalPost     :string ="" ;
      TotalLikes :string ="" ;
      TotalShare  :string ="" ;
      TotalDownload :string ="" ;
      toggled: boolean = false;
emojitext: string;
 

  constructor(private storage: AngularFireStorage,
      private database: AngularFirestore,
      private api: AuthenticationService,
      private router: Router ,
      public httpClient: HttpClient  ,
      private http  : HTTP ,
      public loadingController: LoadingController, 
      private ImageService : ImageService ,
      private filePathobject: FilePath ,
      private base64: Base64  ,
      private fileChooser: FileChooser

      ) {
    this.fullName = this.api.fullName;
    this.UserID = this.api.UserID;

  } 
     ngOnInit() { 
       this.api.checkToken();
       this.GetMyPosts(); 

  }
   GetMyPosts()
   { 
   this.loadingpopup();
    let data = 'UserID='+this.api.UserID; 
    let url = this.api.baseUrl + "ProfileImages/getStatistics?" +data ;
    this.SelfData = this.httpClient.get(url);
      this.SelfData
      .subscribe(data => {  
            this.MyFiles = data;
            this.closePopup();
            this.FullName = this.MyFiles["FullName"];
            this.ThumbPath = this.MyFiles["ThumbPath"];
            this.TotalPost = this.MyFiles["TotalPost"];
            this.TotalLikes = this.MyFiles["TotalLikes"];
            this.TotalShare  = this.MyFiles["TotalShare"];
            this.TotalDownload = this.MyFiles["TotalDownload"]; 
      }),   err =>{  this.closePopup();}
      ;
  }
  getlogin()
  {
    var s=this.api.fullName;
  }
checkLogin()
{   
  
  this.api.readUsers(this.UserID ,this.password); 
    if(this.api.UserID !=0)
    {
      this.api.isLogout.next(false); 
      this.router.navigate(['dashboard']);
    } 
 }
 async RedirectThumb() { 
        this.router.navigate(['thumbnail']);
    } 
  async RedirectCapture() { 
        this.router.navigate(['home']);
    } 
    async RedirectDashboard() {    
        this.router.navigate(['dashboard']);
    }
    async logout() 
    { 
       this.api.logout().then(res => {   
             if(res==true)
             {  
               this.router.navigateByUrl('login')
               window.location.reload();
             } 
          });
     }

 play()
 {
   console.log("Loading..");
 }

  async   loadingpopup()
     {
      this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await this.loading.present();
     }
     closePopup()
{
 this.loading.dismiss();
}

    public add(url)
  { 
    
        this.ImageService.generateThumbnail1(url)
        .then(thumbnailData => { 
        
          this.thumbnailData = thumbnailData;  
        });  
    }
 
  
geturlBigImage()
{
   this.saveFile =[];
 
 const vurl='Profile/'+this.bigImageName;
 
var starsRef = firebase.storage().ref().child(vurl); 
        starsRef.getDownloadURL().then(result =>
            { 
           this.saveFile.push({ 
              path:  result  
              });  
 this.saveImagetodb();
});
}
  geturlThumb()
{
     
   this.thumbFile =[]; 
 const vurl='ThumbProfile/'+this.thumbImageName;
  
 var starsRef = firebase.storage().ref().child(vurl); 
        starsRef.getDownloadURL().then(result =>
            { 
           this.thumbFile.push({ 
              path:  result  
              }); 
              this.geturlBigImage(); 
           //this.savetodb();
});
}
  saveImagetodb()
     {
         
        const exts="jpg";
       let param = {
            "UserID": this.api.UserID ,
            "Extension": exts, 
            "FilePath" : this.saveFile[0].path  , 
            "FileName" : this.bigImageName , 
            "FileFolder" :"Profile"  ,
            "ThumbPath" : this.thumbFile[0].path,   
            "ThumbName" :this.thumbImageName ,
            "ThumbFolder" :  "ThumbProfile" 
  }
 let url = this.api.baseUrl + "ProfileImages/PostProfileImage" ;
    this.http.post(url, param, {})
  .then(data => {
   this.loading.dismiss();
    console.log(data.status); 
     this.GetMyPosts(); 
     alert("Profile picture updated successfully"); 
  })
  .catch(error => {
     alert(error);
     
this.loading.dismiss();
   
   
  });
 
   }
    
     uploadThumb()
     {
      let storageRef = firebase.storage().ref();
    
      const filename = Math.floor(Date.now() / 1000);
      this.thumbImageName=filename + ".jpg";
        const imageRef = storageRef.child(`ThumbProfile/${filename}.jpg`);

      imageRef.putString(this.smallImg, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
        this.uploadBigImage();
         // this.geturlVideo(); 
        
       });
     }
      uploadBigImage()
     {
      let storageRef = firebase.storage().ref();
    
      const filename = Math.floor(Date.now() / 1000);
      this.bigImageName =filename 
      + ".jpg";
      const imageRef = storageRef.child(`Profile/${filename}.jpg`);

      imageRef.putString(this.thumbnailData, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
        this.geturlThumb();
           //alert("done"); 
       });
     }
  
/*for image thumbnail*/
 createThumbnail() {
    this.generateFromImage(this.thumbnailData, 200, 200, 0.5, data => {
     // alert("image generated");
      this.smallImg = data;
      this.smallSize = this.getImageSize(this.smallImg);
      this.uploadThumb();
    });
  }
 
  generateFromImage(img, MAX_WIDTH: number = 700, MAX_HEIGHT: number = 700, quality: number = 1, callback) {
    var canvas: any = document.createElement("canvas");
    var image = new Image();
 debugger;
    image.onload = () => {
      var width = image.width;
      var height = image.height;
 
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");
 
      ctx.drawImage(image, 0, 0, width, height);
        // alert('inside data url');
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg', quality);
 
      callback(dataUrl)
    }
    image.src = img;
  }
 
  getImageSize(data_url) {
    var head = 'data:image/jpeg;base64,';
    return ((data_url.length - head.length) * 3 / 4 / (1024*1024)).toFixed(4);
  }
toBaseImg()
{ 
  debugger;
   const New="data:image/jpeg;base64"; 
   this.fileChooser.open()
  .then(uri => {
    this.loadingpopup();
this.filePathobject.resolveNativePath(uri).then((nativepath)=>{ 
this.nativePathImg =nativepath; 
    this.base64.encodeFile(nativepath).then((base64File) => { 
  
    var str=base64File.split(','); 
    const headerString =str[0];
    this.thumbnailData = base64File.replace(headerString,New);
 
    this.createThumbnail();

    console.log(uri);

  })
  .catch(e => {alert(e);
    this.closePopup();}); 
  })
});
}
handleSelection(event) {
  this.emojitext = this.emojitext + " " + event.char;
}
 async emoji() 
    {  

          this.router.navigateByUrl('emoji');
     }
 }
