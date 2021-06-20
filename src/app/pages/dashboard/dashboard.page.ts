import { Component, OnInit,ViewChild } from '@angular/core';
import { Platform, AlertController, ToastController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Router, ActivatedRoute } from '@angular/router';
 import * as firebase from 'firebase/app'; 
import { File, FileEntry, Entry } from '@ionic-native/File/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorage, AngularFireUploadTask,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
 import {AuthenticationService} from '../service/authentication.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Downloader,DownloadRequest,NotificationVisibility } from '@ionic-native/downloader/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Base64 } from '@ionic-native/base64/ngx'; 
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { ModalController } from '@ionic/angular'; 
import { CommentComponent } from '../../pages/comment/comment.component';
import { ChatPage } from '../../pages/chat/chat.page';
import { MainListPage } from '../../pages/dashboard/main-list/main-list.page'; 
import { CommonModule } from '@angular/common';
import { EffectPage } from '../../pages/effect/effect.page';

 
 @Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
 
export class DashboardPage implements OnInit {
   ResultData: Observable<any>;
   likes: Observable<any>;
   apiKey = ''; 
   cloudFiles1 = []; 
   cloudFiles2 = []; 
   cloudFiles3 = [];  
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
   public thumbnailData: string; 
   Current =1;  
      
     constructor(
        private plt: Platform,
        private alertCtrl: AlertController,
        private fileOpener: FileOpener,
        private router: Router,
        private route: ActivatedRoute,
        private toastCtrl: ToastController,  
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
        public modal: ModalController
        ) 
     { 
       
     }
  ngOnInit() 
  { 
    
      this.api.checkToken();   
      this.GetMedisList1();
      this.GetMedisList2();
      this.GetMedisList3(); 
      this.Current=1;
    }
  ionViewWillEnter()
  {  
       this.api.checkToken();
  } 


  GetMedisList1()
   { 
    let data = 'id='+this.api.UserID+'&CategoryID=1&isSelf=0'; 
    let url = this.api.baseUrl + "Media?" +data ;
    this.ResultData = this.httpClient.get(url);
      this.ResultData
      .subscribe(data => { 
         this.cloudFiles1 = data;
      }); 
  }
  GetMedisList2()
   {
     let data = 'id='+this.api.UserID+'&CategoryID=2&isSelf=0'; 
    let url = this.api.baseUrl + "Media?" +data ;
    this.ResultData = this.httpClient.get(url);
      this.ResultData
      .subscribe(data => { 
         this.cloudFiles2 =data;
      }); 
  }
   GetMedisList3()
   {
      let data = 'id='+this.api.UserID+'&CategoryID=3&isSelf=0';  
    let url = this.api.baseUrl + "Media?" +data ;
    this.ResultData = this.httpClient.get(url);
      this.ResultData
      .subscribe(data => { 
         this.cloudFiles3 =data;
      }); 
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
          title: 'ShareExpress Download',
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
          title: 'ShareExpress Download',
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
  .then(data => {

 const index = this.cloudFiles1.findIndex((obj => obj.UploadID == UploadID));  
 if(isLike==true)
 {
     let Arrlike=this.cloudFiles1[index]["isLike"];
     if(Arrlike== 0)
     {
       this.cloudFiles1[index].isLike=1;
       this.isLike=true;
     }
     else
     {
        this.cloudFiles1[index].isLike=0;
        this.isLike=false;
     }
}
 if(isShare==true)
 {
     let ArrShare=this.cloudFiles1[index]["isShare"];
     if(ArrShare== 0)
     {
       this.cloudFiles1[index].isShare=1;
       this.isShare=false;
     }
     else
     {
        this.cloudFiles1[index].isShare=0;
        this.isShare=false;
     }
}
if(isDownload==true)
 {
     let ArrDownload=this.cloudFiles1[index]["isDownload"];
     if(ArrDownload== 0)
     {
       this.cloudFiles1[index].isDownload=1;
        this.isDownload=false;
     }
     else
     {
        this.cloudFiles1[index].isDownload=0;
         this.isDownload=false;
     }
 }
    console.log(data.status); 
  })
  .catch(error => { 
    console.log(error.status);
  });
}  
   doRefresh1(event) {
     
     this.Current=1;
        this.GetMedisList1();
        setTimeout(() => { 
            event.target.complete();
        }, 2000);
    }
    doRefresh2(event) {
       
      this.Current=2;
        this.GetMedisList2();
        setTimeout(() => { 
            event.target.complete();
        }, 2000);
    }
    doRefresh3(event) {
      
      this.Current=3;
        this.GetMedisList3();
        setTimeout(() => { 
            event.target.complete();
        }, 2000);
    }


    getcurrentFiles(fieldname)
    {   
      if(this.Current==1)
      { 
        if(fieldname=="UploadID")
        { 
          
            this.UploadID=this.cloudFiles1[this.Curindex].UploadID; 
        }
       else if(fieldname=="FileName")
        {
          this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName=this.cloudFiles1[this.Curindex].FileName; 
        }
        else if(fieldname=="ThumbPath")
        {
           this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath=this.cloudFiles1[this.Curindex].ThumbPath;
        }
         else if(fieldname=="Curindex")
        {
            this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID)); 
        }
        else if(fieldname=="FilePath")
        {
            this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath=this.cloudFiles1[this.Curindex].FilePath;
        }
        else if(fieldname=="isDownload")
        { 
         this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID)); 
         this.isDownload=this.cloudFiles1[this.Curindex].isDownload;
        }
        else if(fieldname=="isShare")
        {
           this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID)); 
           this.isShare=this.cloudFiles1[this.Curindex].isShare;
        } 
        else if(fieldname=="isLike")
        {
          this.Curindex=this.cloudFiles1.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike=this.cloudFiles1[this.Curindex].isLike;
        } 
   }
    else if(this.Current==2){  
       if(fieldname=="UploadID")
        { 
            this.UploadID=this.cloudFiles2[this.Curindex].UploadID; 
        }
       else  if(fieldname=="FileName")
        {
          this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName=this.cloudFiles2[this.Curindex].FileName; 
        }
        else if(fieldname=="ThumbPath")
        {
           this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath=this.cloudFiles2[this.Curindex].ThumbPath;
        }
         else if(fieldname=="Curindex")
        {
            this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID)); 
        }
        else if(fieldname=="FilePath")
        {
            this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath=this.cloudFiles2[this.Curindex].FilePath;
        }
        else if(fieldname=="isDownload")
        { 
         this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID)); 
         this.isDownload=this.cloudFiles2[this.Curindex].isDownload;
        }
        else if(fieldname=="isShare")
        {
           this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID)); 
           this.isShare=this.cloudFiles2[this.Curindex].isShare;
        } 
        else if(fieldname=="isLike")
        {
          this.Curindex=this.cloudFiles2.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike=this.cloudFiles2[this.Curindex].isLike;
        } 
    }
    else if(this.Current==3) { 
      if(fieldname=="UploadID")
        { 
            this.UploadID=this.cloudFiles3[this.Curindex].UploadID; 
        }
      else if(fieldname=="FileName")
        {
          this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID));
            this.FileName=this.cloudFiles3[this.Curindex].FileName; 
        }
        else if(fieldname=="ThumbPath")
        {
           this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID));
            this.ThumbPath=this.cloudFiles3[this.Curindex].ThumbPath;
        }
         else if(fieldname=="Curindex")
        {
            this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID)); 
        }
        else if(fieldname=="FilePath")
        {
            this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID));
            this.FilePath=this.cloudFiles3[this.Curindex].FilePath;
        }
        else if(fieldname=="isDownload")
        { 
         this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID)); 
         this.isDownload=this.cloudFiles3[this.Curindex].isDownload;
        }
        else if(fieldname=="isShare")
        {
           this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID)); 
           this.isShare=this.cloudFiles3[this.Curindex].isShare;
        } 
        else if(fieldname=="isLike")
        {
          this.Curindex=this.cloudFiles3.findIndex((obj => obj.UploadID == this.UploadID));
            this.isLike=this.cloudFiles3[this.Curindex].isLike;
        } 
       }   
    }
    Shareloader(val)
    { 
        
        if(this.Current==1){ this.cloudFiles1[this.Curindex].isShareStart=val;     }
        else if(this.Current==2){ this.cloudFiles2[this.Curindex].isShareStart=val;   }
        else if(this.Current==3){ this.cloudFiles3[this.Curindex].isShareStart=val;  }  
    }
    Downloadloader(val)
    { 
       
        if(this.Current==1){ this.cloudFiles1[this.Curindex].isDownloadStart=val;     }
        else if(this.Current==2){ this.cloudFiles2[this.Curindex].isDownloadStart=val;   }
        else if(this.Current==3){ this.cloudFiles3[this.Curindex].isDownloadStart=val;  }  
    }
    ShowProfile(UserID)
    {
       
      this.api.ToUserID=UserID;
      this.router.navigate(['thumbnail']);
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
    
    async RedirectCapture() { 
        this.router.navigate(['home']);
    } 
     async RedirectProfile() {    
        this.router.navigate(['profile']);
    }
     async  AddFilterEffect(data: any)
    {
   
      const modal = await this.modal.create({
      component: EffectPage,
      animated: true, 
      componentProps: data
    }).then(modal => {
      modal.present();
      modal.onDidDismiss().then(()=>{
        //this.getEmployeeList();
      });
    });
  }
} 
