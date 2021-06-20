import { Component,ViewChild, OnInit } from '@angular/core'; 
import { PopoverController, NavParams, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AuthenticationService} from '../service/authentication.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { LoadingController } from '@ionic/angular';
import { EmojiPage } from '../../pages/emoji/emoji.page'; 
import { ModalController } from '@ionic/angular'; 
import { Storage } from '@ionic/storage'; 
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';



@Component({
  selector: 'app-effect',
  templateUrl: './effect.page.html',
  styleUrls: ['./effect.page.scss'],
})
export class EffectPage implements OnInit {

   toggled: boolean = false;
  message: string = '';

  data: any;
   ResultData: Observable<any>;
   CommentData = []; 
   comment ="";
   loading1 : any;
   CommentID =0;
  commentType=1;
  DownloadPath ="";
    @ViewChild('myvideo1') myvideo1:any;
    constructor(  public popoverCtrl: PopoverController,  
    	 private storage: AngularFireStorage,
                private navParams: NavParams, 
                private toastCtrl: ToastController,
                private modal1: ModalController ,
                private router: Router ,
                private api: AuthenticationService,
                public httpClient: HttpClient  ,
                private http  : HTTP ,
                public loadingController: LoadingController
             ) 
		  {  
		    this.data = this.navParams.data;
		     this.GetCommentList();

		  }

 


  GetCommentList()
   {  
    let data1 = 'UploadID='+this.data.UploadID+'&UserID='+this.api.UserID; 
    let url = this.api.baseUrl + "Comments?" +data1;
    this.ResultData = this.httpClient.get(url);
      this.ResultData
      .subscribe(result => { 
         this.CommentData = result;
      }); 
  }
  ngOnInit() {}
 

  close() {
  	this.modal1.dismiss();
  }
  CreateFilter()
  {  
     this.loadingpopup();
    
      
          let  param = {
            "FilterID" : 1 ,
            "UserID": this.api.UserID ,
            "music": "" ,
            "backimage" :  this.data.FilePath, 
               
           } 
  let url = this.api.baseUrl + "fftool/PostCreateFilter" ;
    this.http.post(url, param, {})
  .then(data => {
  	debugger;
  	//this.DownloadPath=data[DownloadPath];
  	this.play(this.api.baseUrl+"/Media/" + this.api.UserID + "/final.mp4");
    this.loading1.dismiss();
    console.log(data.status); 
   })
  .catch(error => {
   
    console.log(error.status); 
     this.loading1.dismiss();
  }); 
 
  }
   play(url)
    { 
      let video = this.myvideo1.nativeElement;
       video.src = url; 
       video.poster="assets/load.gif";
       video.play(); 
      
   } 
  async   loadingpopup()
     {
      this.loading1 = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    await this.loading1.present();
     }
    closePopup()
	{
	 this.loading1.dismiss();
	}
  addReply(data){ 
     this.CommentID =data.CommentID; 
  } 

  handleSelection(event) {
    console.log(event.char);
    this.message += event.char;
  }
  
   async  playVideo()
    {  
    	const paths=this.api.basePath+"/Media/" + this.api.UserID + "/final.mp4";
    // this.uploadOnServer(paths);
    	 
      this.play(paths);
  }
 async ApplyFilter(data: any)
  {
     
      const modal2 = await this.popoverCtrl.create({
      cssClass: 'select-modal',
      component: EmojiPage,
      animated: true,
      componentProps: data
    }).then(modal2 => {
      modal2.present();
      modal2.onDidDismiss().then(()=>{
        //this.getEmployeeList(); 
      });
    });

  }

     async uploadOnServer(FilePaths) 
    { 
     this.loadingpopup();
       
      
    const folder="Filter/";
   
    //File reference
     const exts1= FilePaths.split('.').pop();
     const VideoFilepath= this.api.UserID+"filer1";
    const fileRef = this.storage.ref(folder+ VideoFilepath); 
   // const dataUrl = URL.createObjectURL(event.item(0)); 
  //  this.add(dataUrl);
 
    this.storage.upload(folder+VideoFilepath, FilePaths)
     .then((snapshot)=> { 
     const exts=snapshot.ref.name.split('.').pop();
      //this.uploadThumb(); 
        });   
    } 
}
