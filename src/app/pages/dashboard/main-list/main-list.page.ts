import { Component,ViewChild } from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Router, ActivatedRoute } from '@angular/router';
 
import * as firebase from 'firebase/app';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File, FileEntry, Entry } from '@ionic-native/File/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireUploadTask,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Gesture, GestureController } from '@ionic/angular';
import {AuthenticationService} from '../../service/authentication.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Downloader,DownloadRequest,NotificationVisibility } from '@ionic-native/downloader/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Base64 } from '@ionic-native/base64/ngx'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createGesture } from '@ionic/core'
import { Directive,ElementRef,Input,AfterViewInit,NgZone, EventEmitter,  Output} from "@angular/core";
import {  GestureConfig, } from '@ionic/core'; 
import { PopoverController, NavParams,   ModalController } from '@ionic/angular';  
 
 @Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage  {
 ResultData: Observable<any>;
   style :any;
   likes: Observable<any>;
   
   apiKey = ''; 
   toggle: string = 'slider';
   className: string = 'Hide';
   className2: string = 'Show';
   className3: string = 'Show';
   dataList =[]; 
   cloudFiles2 = []; 
   cloudFiles3 = []; 
   uploadProgress = 0;
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
  private topOverlayElement: HTMLDivElement;
  private bottomOverlayElement: HTMLDivElement;
  private timeoutDelay: any; 
  public thumbnailData: string; 
  randomNo =0;
  Current =1;  
  
  panCount : any =0;
    @Output() press = new EventEmitter();
    @Input("delay") delay =  1500;
    action: any;  
    private longPressActive = false; 
    @ViewChild('myvideo1') myvideo1:any;
       
     constructor(
        private plt: Platform,
        private alertCtrl: AlertController,
        private fileOpener: FileOpener,
        private router: Router,
        private route: ActivatedRoute,
        private toastCtrl: ToastController,
        
        private imagePicker: ImagePicker,
         
        private api: AuthenticationService, 
        private file: File,
        private storage: AngularFireStorage,
        private fileChooser: FileChooser ,
        private database: AngularFirestore ,
        private socialSharing: SocialSharing ,
        private downloader: Downloader ,
        private filePathobject: FilePath ,
        private base64: Base64 ,
        public httpClient: HttpClient  ,
        private http  : HTTP ,
        private gestureCtrl: GestureController, 
        private zone: NgZone   ,
         public modal: ModalController ,
         private navParams: NavParams 
         
        ) 
     {   
        this.UploadID=this.api.UploadID;
        this.getcurrentFiles("FilePath");
     } 
   

 
    ionViewDidEnter()
    {  
       this.loadLongPressOnElement();
     this.PlayVideo(this.FilePath,this.UploadID);
    } 
  
  Reset()
   {
     this.className = 'Hide';
     this.className2 = 'Show'; 
     let video = this.myvideo1.nativeElement;
     video.src = "";
      
   }
 
 nextVideo(i)
 {  
    
 this.isDownload =false;
 this.isShare=false;
 this.isLike=false;
  this.getcurrentFiles("Curindex");
   if(i==1)
    {
      this.Curindex =this.Curindex + 1;
       this.getcurrentFiles("UploadID");
    }
    else
    {
      if(this.Curindex>=0)
      {
       this.Curindex =this.Curindex - 1;
       this.getcurrentFiles("UploadID"); 
     }
    }
     let video = this.myvideo1.nativeElement; 
     video.poster= "assets/load.gif";
     let max =0;
    if(this.Current==1){   max= this.api.CurrentDatalist.length; }
    else if(this.Current==2){  max= this.cloudFiles2.length;}
    else if(this.Current==3) {  max= this.cloudFiles3.length;} 
      this.getcurrentFiles("Curindex");   
    if(this.Curindex<= max) {    
     this.getcurrentFiles("FilePath");
   
     if(this.FilePath.includes('.jpg')||this.FilePath.includes('.jpeg')||this.FilePath.includes('.png')||this.FilePath.includes('.gif'))
     {
        if(i==1)
        {
          this.Curindex =this.Curindex + 1;
         this.getcurrentFiles("UploadID");
            
           if(this.Curindex< max)
           {
             this.nextVideo(1);
           }  
        }  
        else
        {
           this.Curindex =this.Curindex - 1;
           this.getcurrentFiles("UploadID");
           
           if(this.Curindex>0)
           {
             this.nextVideo(0);
           } 
        }
   }
   else
   {    
    
      this.getcurrentFiles("FileName");
      this.getcurrentFiles("ThumbPath");
       this.getcurrentFiles("isLike");
      this.getcurrentFiles("isDownload");
      this.getcurrentFiles("isShare");
     this.getcurrentFiles("FilePath");
      video.src = this.FilePath;
      video.poster= this.ThumbPath;
      video.play(); 
      //this.getcurStatus();
     } 
    } 
     else
     { }
  }
   play1(url)
    { 
      let video = this.myvideo1.nativeElement;
       video.src = url; 
       video.poster="assets/load.gif";
       video.play(); 
       this.className = 'Show';
       this.className2 = 'Hide';
   } 

 PlayVideo(url, UploadID) { 
      
    this.UploadID = UploadID;
    this.FilePath= url;
    this.getcurrentFiles("isDownload");
    this.getcurrentFiles("isShare");
    this.getcurrentFiles("isLike");
    this.getcurrentFiles("FileName");
    
     if (url.indexOf('.MOV') > -1 || url.indexOf('.mp4') > -1) {
     this.play1(url);  
    }  
  }
  
 segmentChanged(ev: any) { 
        if (ev.detail.value == 1) {
            this.Current=1;
            document.getElementById("first").style.display = "block";
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "none";  
        }
        if (ev.detail.value == 2) {
            this.Current=2;
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "block";
            document.getElementById("third").style.display = "none"; 
        }
        if (ev.detail.value == 3) {
            this.Current=3;
            document.getElementById("first").style.display = "none";
            document.getElementById("second").style.display = "none";
            document.getElementById("third").style.display = "block";
        }
    }
 download1()
 { 
   this.download(this.UploadID,this.FileName, this.FilePath);
 }
public download(UploadID,fileName, FilePath)
{  
  
  this.UploadID=UploadID;
  this.FilePath = FilePath;
  this.getcurrentFiles("Curindex");  
  this.Downloadloader(true);  
  this.isDownloadStart=true;
     var request: DownloadRequest = {
          uri: FilePath,
          title: 'Smate Download',
          description: '',
          mimeType: '',
          visibleInDownloadsUi: true,
          notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
          destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileName
          }
      };
        this.downloader.download(request)
              .then((location: string) => {
                //alert('File downloaded at:'+location);
                this.like(this.UploadID,false,false,true);
                this.Downloadloader(false);  
                this.isDownloadStart=false;
              })
              .catch((error: any) => {console.log(error);
               alert(error);
                 this.Downloadloader(false); 
              }); 
       } 
 whatsappShare1()
 {
   this.isShareStart = true;
   this.getcurrentFiles("FilePath");
   this.getcurrentFiles("FileName");
   this.whatsappShare(this.UploadID,this.FileName, this.FilePath);
 }
 whatsappShare(UploadID,fileNames,filePath)
 {
     this.UploadID=UploadID;
     this.getcurrentFiles("Curindex");  
     this.Shareloader(true);
 
   var request: DownloadRequest = {
          uri: filePath,
          title: 'Smate Download',
          description: '',
          mimeType: '',
          visibleInDownloadsUi: true,
          notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
          destinationInExternalFilesDir: {
              dirType: 'Downloads',
              subPath: fileNames
          }
      };
        this.downloader.download(request)
              .then((location: string) => { 
               this.toBaseImg(location);
              })
              .catch((error: any) => {
                  alert(error); this.Shareloader(false); 
                  this.isShareStart = false;
              })
   }
 toBaseImg(location)
{ 
   const New="data:video/mp4;base64"; 
    this.filePathobject.resolveNativePath(location).then((nativepath)=>{ 

    this.base64.encodeFile(nativepath).then((base64File) => { 
    var str=base64File.split(','); 
    const headerString =str[0];
    this.thumbnailData = base64File.replace(headerString,New);
   
   this.Shareloader(false);
   this.isShareStart = false;
    this.socialSharing.shareViaWhatsApp("",this.thumbnailData,null).then(() => {
       this.like(this.UploadID,true,false,false);
          }).catch((error: any) => {alert(error);this.Shareloader(false);  }); 
       }).catch((error: any) => {alert(error);this.Shareloader(false);  });
     }).catch((error: any) => {alert(error);this.Shareloader(false);  });
  }
  like1(isShare,isLike,isDownload)
  {
   this.like(this.UploadID,isShare,isLike,isDownload);
  }
   like(UploadID,isShare,isLike,isDownload)
  {  
     let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let options = {
        headers: headers
     }
     let param = {
                "UploadID" : UploadID ,
                "ActionBy": this.api.UserID,
                "isLike": isLike ,
                "IsDownload" :isDownload ,
                "isShare" : isShare  
      }

 let url = this.api.baseUrl + "Home/PostSaveLikes" ;
   this.http.post(url, param, {})
  .then(data => 
  { 
 const index = this.api.CurrentDatalist.findIndex((obj => obj.UploadID == UploadID));  
 if(isLike==true)
 {
     let Arrlike=this.api.CurrentDatalist[index]["isLike"];
     if(Arrlike== 0)
     {
       this.api.CurrentDatalist[index].isLike=1;
       this.isLike=true;
     }
     else
     {
        this.api.CurrentDatalist[index].isLike=0;
        this.isLike=false;
     }
}
 if(isShare==true)
 {
     let ArrShare=this.api.CurrentDatalist[index]["isShare"];
     if(ArrShare== 0)
     {
       this.api.CurrentDatalist[index].isShare=1;
       this.isShare=false;
     }
     else
     {
        this.api.CurrentDatalist[index].isShare=0;
        this.isShare=false;
     }
}
if(isDownload==true)
 {
     let ArrDownload=this.api.CurrentDatalist[index]["isDownload"];
     if(ArrDownload== 0)
     {
       this.api.CurrentDatalist[index].isDownload=1;
        this.isDownload=false;
     }
     else
     {
        this.api.CurrentDatalist[index].isDownload=0;
         this.isDownload=false;
     }
 }
    console.log(data.status); 
  })
  .catch(error => { 
    console.log(error.status);
  });
}  
    
    loadLongPressOnElement() {
     
      let video = this.myvideo1.nativeElement;
        this.style = video.style;
     
        const windowWidth = window.innerWidth;
         const windowHeight = window.innerHeight;

        const gesture = this.gestureCtrl.create({
            el: video,
            threshold: 100,
            maxAngle: 100,
            gestureName: 'long-press'
            ,direction : undefined ,
             onStart: () => {
        this.style.transition = "none";
      },
      onMove: (ev) => {
        
           this.panCount = this.panCount +1; 
     this.style.transform = `translateY(${ev.deltaY}px) rotate(${ev.deltaX/20}deg)`
   //  console.log(ev.deltaY); 
  },
      onEnd: (ev) => {
        /* console.log('start end');  
         console.log(ev.deltaY);*/
          this.style.transform = ''; 
          if(ev.deltaY>10)
          {
            this.nextVideo(0);
          }
          else
          {
             this.nextVideo(1); 
          } 
      } 
        });
        gesture.enable(true);
    }  
    getcurrentFiles(fieldname)
    {   
        if(fieldname=="UploadID")
        { 
          
            this.UploadID=this.api.CurrentDatalist[this.Curindex].UploadID; 
        }
       else if(fieldname=="FileName")
        {
          this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName=this.api.CurrentDatalist[this.Curindex].FileName; 
        }
        else if(fieldname=="ThumbPath")
        {
           this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath=this.api.CurrentDatalist[this.Curindex].ThumbPath;
        }
         else if(fieldname=="Curindex")
        {
            this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID)); 
        }
        else if(fieldname=="FilePath")
        { 
            this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath=this.api.CurrentDatalist[this.Curindex].FilePath;
        }
        else if(fieldname=="isDownload")
        { 
         this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID)); 
         this.isDownload=this.api.CurrentDatalist[this.Curindex].isDownload;
        }
        else if(fieldname=="isShare")
        {
           this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID)); 
           this.isShare=this.api.CurrentDatalist[this.Curindex].isShare;
        } 
        else if(fieldname=="isLike")
        {
          this.Curindex=this.api.CurrentDatalist.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike=this.api.CurrentDatalist[this.Curindex].isLike;
        } 
    
     
    }
    Shareloader(val)
    { 
          this.api.CurrentDatalist[this.Curindex].isShareStart=val;     
    }
    Downloadloader(val)
    {  
      this.api.CurrentDatalist[this.Curindex].isDownloadStart=val;   
    }
     
  close() { 
    this.modal.dismiss();
  }
    
} 
