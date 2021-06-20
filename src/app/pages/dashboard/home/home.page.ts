import { Component, OnInit,ViewChild } from '@angular/core'; 
/*import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
*/
import { ActivatedRoute, Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, FileEntry, Entry } from '@ionic-native/File/ngx';
import { Storage } from '@ionic/storage'; 
 
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireStorageModule } from '@angular/fire/storage';
 import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import * as firebase from 'firebase/app';
 
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ImageService} from '../../service/image.service';
import { AuthenticationService} from '../../service/authentication.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { LoadingController } from '@ionic/angular'; 
import { ChatPage } from '../../../pages/chat/chat.page';
import { ModalController } from '@ionic/angular';
import { MainListPage } from '../../dashboard/main-list/main-list.page'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  implements OnInit   {
      
      FileName : String="";
      FilePath : String="";
      isDownloadStart= false;  
      isDownload = false;
      isShareStart= false;
      isShare = false;
      isLike = false;
      green : string ="green";
      UploadID : any ;
      ThumbPath : any ;
      Curindex: any ;
      videoPath  = '';
      videoName   = '';
      MEDIA_FOLDER_NAME = 'my_media';
      videoDataUrl ='';
      directories = [];
      folder = '';
      SelfData: Observable<any>;
      MyFiles = [];
      uploadProgress = 0; 
      savefiles1 = [];
      savefiles2 = [];
      thumbFile= [];
      saveFile = [];
      thumbnailData: any = "";
      thumbImagePath : any ="";
      VideoFilepath : any ="";
      selectedfile : any;
      loading : any; 
      
    constructor(  
        
        private fileChooser: FileChooser,  
        
        private file: File, 
        private storage: AngularFireStorage,
         
        private plt: Platform,
        private fileOpener: FileOpener,
        private alertCtrl: AlertController,  
        private route: ActivatedRoute,
        private toastCtrl: ToastController,
        private filePath: FilePath ,
        private database:  AngularFirestore ,
        private ImageService : ImageService ,
        private api: AuthenticationService ,
        private socialSharing: SocialSharing ,
        private base64: Base64 ,
        public httpClient: HttpClient  ,
        private http  : HTTP,
        private router: Router,
        public loadingController: LoadingController, 
        public modal: ModalController
      ) {  
        
     
 }
      
  ngOnInit()  
  {  
  this.GetMyPosts(); 
  }
 
 GetMyPosts()
   { 
     this.loadingpopup();

    let data = 'id='+this.api.UserID+'&CategoryID=1&isSelf=1'; 
    let url = this.api.baseUrl + "Media?" +data ;
    this.SelfData = this.httpClient.get(url);
      this.SelfData
      .subscribe(data => { 
       
       this.closePopup();
         this.MyFiles = data;
      }), err =>{  this.closePopup();}; 
  }
   doRefresh(event) {
      
        this.GetMyPosts();
        setTimeout(() => { 
            event.target.complete();
        }, 2000);
    }
  
/*  pickImages () {

     this.fileChooser.open()
  .then(uri => {})
  .catch(e => alert(e)); 
  
   
  }
 
  captureImage() {
    this.mediaCapture.captureImage().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
         // alert(data[0].fullPath)
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
 
  recordAudio() {
    this.mediaCapture.captureAudio().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
           //this.storeMediaFiles(data);
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }
 
  recordVideo() {
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {
        if (data.length > 0) {
         // this.storeMediaFiles(data);
          this.copyFileToLocalDir(data[0].fullPath);
        }
      },
      (err: CaptureError) => console.error(err)
    );
  }*/
  copyFileToLocalDir(fullPath) {
    let myPath = fullPath;
   
    // Make sure we copy from the right location
    if (fullPath.indexOf('file://') < 0) {

      myPath = 'file://' + fullPath;
    
    }
 
    const ext = myPath.split('.').pop();
  
    const d = Date.now();
    const newName = `${d}.${ext}`;
 
    const name = myPath.substr(myPath.lastIndexOf('/') + 1);
    const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
    const copyTo = this.file.dataDirectory + this.MEDIA_FOLDER_NAME;
     
    this.file.copyFile(copyFrom, name, copyTo, newName).then(
      success => {
       // this.loadFiles();
      },
      error => {
      }
    );
  }
   
 
  async uploadFile(f: FileEntry) {
    const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
    const ext=f.name.split('.').pop();
    const type = this.getMimeType(f.name.split('.').pop());
    const buffer = await this.file.readAsArrayBuffer(path, f.name);
    const fileBlob = new Blob([buffer], type);

   alert(ext); 
    const randomId = Math.random()
      .toString(36)
      .substring(2, 8)+'.'+ext;
 
    const uploadTask = this.storage.upload(
      `files/${new Date().getTime()}_${randomId}`,
      fileBlob
    );
 
    uploadTask.percentageChanges().subscribe(change => {
     // alert(change);
      this.uploadProgress = change;
    });
 
 uploadTask.catch(async res => {
  // alert(res);
 }
   );
    uploadTask.then(async res => {
      //alert(res);
      const toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'File upload finished!'
      });
      toast.present();
    });
  }
 
  getMimeType(fileExt) {
    if (fileExt == 'wav') return { type: 'audio/wav' };
    else if (fileExt == 'jpg') return { type: 'image/jpg' };
    else if (fileExt == 'mp4') return { type: 'video/mp4' };
    else if (fileExt == 'MOV') return { type: 'video/quicktime' };
  }

 
  save()
  {
     this.database.collection('/Media').add({
          FileName: "s", 
          filePath :"storageRef1.getDownloadURL()",
           Ext: "mp4" ,
           Thumbnail : "" 
        })
        .then(
          (res) => {  
             alert("Account Created");
           }); 
          
  }
   
  public add(url)
  { 
        this.ImageService.generateThumbnail1(url)
        .then(thumbnailData => { 
          this.thumbnailData = thumbnailData;  
        });  
      }
     uploadThumb()
     {
      let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
      const filename = Math.floor(Date.now() / 1000);
      this.thumbImagePath =filename + ".jpg";
        const imageRef = storageRef.child(`Thumb/${filename}.jpg`);

      imageRef.putString(this.thumbnailData, firebase.storage.StringFormat.DATA_URL)
      .then((snapshot)=> {
          this.geturlVideo(); 
        
       });
     }
     saveImagetodb()
     {
        debugger;
        const exts=this.VideoFilepath.split('.').pop();
       let param = {
            "UploadID" : 0 ,
            "Extension": exts,
            "UserID": this.api.UserID ,
            "SecurityType" :false ,
            "FilePath" : this.saveFile[0].path  ,
            "FileFolder" :"Status"  ,
            "FileName" : this.VideoFilepath , 
            "ThumbPath" : "",  
            "ThumbFolder" :  "" ,  
            "ThumbName" :""
  }
 let url = this.api.baseUrl + "Media/PostSaveMedia" ;
    this.http.post(url, param, {})
  .then(data => {
 this.loading.dismiss();
    console.log(data.status); 
alert("Media Added Successfully"); 
  })
  .catch(error => {
this.loading.dismiss();
    console.log(error.status);
   
  });
 
         this.database.collection('/Media').add({
          FileName: this.VideoFilepath, 
          ThumbName : "",
          ThumbFolder : "" ,
          FileFolder : "Status" ,
          FilePath : this.saveFile[0].path,
          Ext:      exts,
          ThumbPath : "",
          UserID : this.api.UserID   
        })
        .then(
          (res) => {  
             
           });
     }
     UploadImgToDb()
     {
        const exts=this.VideoFilepath.split('.').pop();
       let param = {
            "UploadID" : 0 ,
            "Extension": exts,
            "UserID": this.api.UserID ,
            "SecurityType" :false ,
            "FilePath" : this.saveFile[0].path  ,
            "FileFolder" :"Status"  ,
            "FileName" : this.VideoFilepath , 
            "ThumbPath" : this.thumbFile[0].path  ,
            "ThumbFolder" :  "Thumbs" ,  
            "ThumbName" :this.thumbImagePath
  }
 let url = this.api.baseUrl + "Media/PostSaveMedia" ;
    this.http.post(url, param, {})
  .then(data => {
 
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });

     }
     savetodb()
     {
        this.UploadImgToDb();
       const exts=this.VideoFilepath.split('.').pop();
         this.database.collection('/Media').add({
          FileName: this.VideoFilepath, 
          ThumbName : this.thumbImagePath,
          ThumbFolder : "Thumbs" ,
          FileFolder : "Status" ,
          FilePath : this.saveFile[0].path,
          Ext:      exts,
          ThumbPath : this.thumbFile[0].path ,
          UserID : this.api.UserID   
        })
        .then(
          (res) => {  
             alert("File Uploaded Successfully"); 
           });
     }
 geturlVideo()
{
   this.saveFile =[];
 //const storageRef = firebase.storage().ref(); 
 const vurl='Status/'+this.VideoFilepath;
var starsRef = firebase.storage().ref().child(vurl); 
        starsRef.getDownloadURL().then(result =>
            { 
           this.saveFile.push({ 
              path:  result  
              });  
 this.geturlThumb();
});
}
geturlImage()
{
   this.saveFile =[];
 //const storageRef = firebase.storage().ref(); 
 const vurl='Status/'+this.VideoFilepath;
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
        const vurl='Thumb/'+this.thumbImagePath;
        var starsRef = firebase.storage().ref().child(vurl); 
        starsRef.getDownloadURL().then(result =>
        { 
        this.thumbFile.push({ 
        path:  result  
        });  
        this.savetodb();
      });
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
     async uploadOnServer(event: FileList) 
    { 
     this.loadingpopup();
       this.savefiles1 = [];  
      this.selectedfile = event.item(0) ;
    const folder="Status/";
      this.VideoFilepath = `${new Date().getTime()}_${this.selectedfile.name}`; 
    //File reference
     const exts1= this.VideoFilepath.split('.').pop();
     if(exts1=="jpg"|| exts1=="jpeg" || exts1=="png" || exts1=="gif")
     {
      this.uploadImage();
     }
     else
     {
    const fileRef = this.storage.ref(folder+this.VideoFilepath); 
    const dataUrl = URL.createObjectURL(event.item(0)); 
    this.add(dataUrl);
 
    this.storage.upload(folder+this.VideoFilepath, this.selectedfile)
     .then((snapshot)=> { 
     const exts=snapshot.ref.name.split('.').pop();
      this.uploadThumb(); 
        });  
       }
      }

uploadImage()
{
    const folder="Status/";
    this.storage.upload(folder+this.VideoFilepath, this.selectedfile)
    .then((snapshot)=> { 
    this.geturlImage();
    });  

 }
   async RedirectDashboard() {    
        this.router.navigate(['dashboard']);
    }
     async RedirectProfile() {    
        this.router.navigate(['profile']);
    }
 
    getcurrentFiles(fieldname)
    {   
      
        if(fieldname=="UploadID")
        {  
          this.UploadID=this.MyFiles[this.Curindex].UploadID; 
        }
        else if(fieldname=="FileName")
        {
          this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName=this.MyFiles[this.Curindex].FileName; 
        }
        else if(fieldname=="ThumbPath")
        {
           this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath=this.MyFiles[this.Curindex].ThumbPath;
        }
         else if(fieldname=="Curindex")
        {
            this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID)); 
        }
        else if(fieldname=="FilePath")
        {
            this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath=this.MyFiles[this.Curindex].FilePath;
        }
        else if(fieldname=="isDownload")
        { 
         this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID)); 
         this.isDownload=this.MyFiles[this.Curindex].isDownload;
        }
        else if(fieldname=="isShare")
        {
           this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID)); 
           this.isShare=this.MyFiles[this.Curindex].isShare;
        } 
        else if(fieldname=="isLike")
        {
          this.Curindex=this.MyFiles.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike=this.MyFiles[this.Curindex].isLike;
        } 
    
      }
    Shareloader(val)
    {  
          this.MyFiles[this.Curindex].isShareStart=val;   
         
    }
    Downloadloader(val)
    { 
       this.MyFiles[this.Curindex].isDownloadStart=val;  
    }
    
    async  CommentLoad(data: any)
    {
       const modal = await this.modal.create({
      component: ChatPage,
      animated: true, 
      componentProps: data
    }).then(modal => {
      modal.present();
      modal.onDidDismiss().then(()=>{
        //this.getEmployeeList();
      });
    });
  }
   async  ShowVideos(data: any, list :any)
    { 
    
    this.api.CurrentDatalist=list;
   this.api.UploadID=data.UploadID; 
      const modal = await this.modal.create({
      component: MainListPage,
      animated: true, 
      componentProps: list
    }).then(modal => {
      modal.present();
      modal.onDidDismiss().then(()=>{
        //this.getEmployeeList();
      });
    });
  }
    
}