import { Component, OnInit } from '@angular/core'; 
import { PopoverController, NavParams, ToastController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'; 
import { AuthenticationService} from '../service/authentication.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
 

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
 data: any;
   ResultData: Observable<any>;
   CommentData = []; 
  constructor(  public popoverCtrl: PopoverController,  
                private navParams: NavParams, 
                private toastCtrl: ToastController,
                private modal: ModalController ,
                private router: Router ,
                private api: AuthenticationService,
                public httpClient: HttpClient  ,
                private http  : HTTP  
             ) 
		  { 
		     this.data = this.navParams.data;
		     this.GetCommentList();
		  }

GetCommentList()
   {  
    let data = 'UploadID='+this.data.UploadID+'&UserID='+this.api.UserID; 
    let url = this.api.baseUrl + "Comments?" +data ;
    this.ResultData = this.httpClient.get(url);
      this.ResultData
      .subscribe(data => { 
         this.CommentData = data;
      }); 
  }
  ngOnInit() {}

   /*async RedirectDashboard() {    
        this.router.navigate(['dashboard']);
    }*/

  close() {
  	this.modal.dismiss();
  }

}
