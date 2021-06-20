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


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  toggled: boolean = false;
  message: string = '';

  data: any;
   ResultData: Observable<any>;
   CommentData = []; 
   comment ="";
   loading : any;
   CommentID =0;
  commentType=1;
   
   @ViewChild('inputEl') inputElRef:any;
  constructor(  public popoverCtrl: PopoverController,  
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
  addComment()
  {  
       this.loadingpopup();
       
       if(this.CommentID!=0)
       {
        this.commentType=2;
       }
       else
       {
       this.commentType=1;
       }
           let  param = {
            "CommentID" : this.CommentID ,
            "UploadID": this.data.UploadID,
            "ActionBy": this.api.UserID ,
            "Description" :  this.comment, 
            "CommentType" :this.commentType  , 
            "isActive" : true   
           }
 let url = this.api.baseUrl + "Comments/PostComments" ;
    this.http.post(url, param, {})
  .then(data => {
  	this.GetCommentList();
    this.comment="";
    this.loading.dismiss();
    console.log(data.status); 
   })
  .catch(error => {
   
    console.log(error.status); 
     this.loading.dismiss();
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
  addReply(data){ 
     this.CommentID =data.CommentID; 
  } 

  handleSelection(event) {
    console.log(event.char);
    this.message += event.char;
  }
  
   async  ShowEmoji()
    {   
     /* const modal1 = await this.popoverCtrl.create({
      cssClass: 'select-modal',
      component: EmojiPage,
      animated: true
     
    }).then(modal1 => {
      modal1.present();
      modal1.onDidDismiss().then(()=>{
        //this.getEmployeeList(); 
      });
    });*/
  }
 async ApplyFilter(data: any)
  {
    debugger;
      const modal1 = await this.popoverCtrl.create({
      cssClass: 'select-modal',
      component: EmojiPage,
      animated: true,
      componentProps: data
    }).then(modal1 => {
      modal1.present();
      modal1.onDidDismiss().then(()=>{
        //this.getEmployeeList(); 
      });
    });

  }
    
}
