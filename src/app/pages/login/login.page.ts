import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import {AuthenticationService} from '../service/authentication.service';
 import { AngularFireStorage, AngularFireUploadTask,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
      public simInfo: any;
      public cards: any;
      Mobile : any;
      Name : any;
      Password : any;
      ErrorMessage :string="";
      NewUserClass: string = 'Hide';
      ExistingUserClass: string = 'Show';
      userlist : any = [];
      isaccountExist : any =0;
      private Token = 'UserID';
      films: Observable<any>;
      loginData :any;
      Gender : any;
      loading : any;
  constructor(private router: Router
    ,private api: AuthenticationService
    ,private afs: AngularFireStorage 
    ,private database: AngularFirestore
    ,private storage: Storage,
     public httpClient: HttpClient  ,
     private http  : HTTP ,
     public loadingController: LoadingController,
    
     ) { }

  ngOnInit()
  { 
    
  	 //this.getmobile();
  }
     
    
  ionViewWillEnter()
  {  
     this.storage.get(this.Token).then(res => {
                if (!res) {
                    //this.route.navigateByUrl('login');
                }
                else {

                    this.api.isLogout.next(false);
                    this.api.UserID = res;
                    
                    this.router.navigateByUrl('dashboard');
                }
            });
  }
   
LoginExist()
{ 
   
this.loadingpopup();  
  this.ErrorMessage="";
  if(this.Password!="" && this.Password!=undefined &&  this.Mobile!="" && this.Mobile != undefined)
  {
  
  let data = 'MobileNo='+this.Mobile+'&Password='+this.Password; 
  let url = this.api.baseUrl + "Login/GetUserLogin?"+data ;
  this.films = this.httpClient.get(url);
    this.films
    .subscribe(data => { 
       this.loginData = data;
       if(data!=null)
       { 
         this.api.UserID= data["UserID"];
        this.storage.set('UserID', data["UserID"]);
      this.storage.set('fullName', data["Name"]).then(() => { 
          this.api.authenticationState.next(true); 
          this.closePopup();
          this.router.navigate(['dashboard']); 
          return true; 
        });  
      }
    else
       {
        this.ErrorMessage ="Invalid Login";
        this.closePopup();
       }
    }) ;

    }
    else{
      this.ErrorMessage = "Please enter info";
      this.closePopup();
    }
  }
   CreateUser()
  {  
  this.loadingpopup();
     if(this.Name!="" && this.Password !="" && this.Mobile !="" && this.Mobile !=undefined && this.Password!= undefined && this.Name != undefined) 
     { 
       let param = {
         "UserID" :0 ,
            "Name" : this.Name,
            "MobileNo": this.Mobile,
            "Password": this.Password ,
            "Gender" :0  ,
            "IsActive" : true
            }
     let url = this.api.baseUrl + "Login/PostCreateLogin" ;
        this.http.post(url, param, {})
      .then(data => {
        this.loginData = data;
        
       if(data!=null)
       { 
          this.api.UserID= data["UserID"];
          this.storage.set('UserID', data["UserID"]);
          this.storage.set('fullName', data["Name"]).then(() => { 
          this.api.authenticationState.next(true); 
          this.closePopup();
          this.router.navigate(['dashboard']); 

          return true; 
        });
        } 
        console.log(data.status);
            
       })
      .catch(error => {
        this.closePopup();
        alert(error.error);
        alert(error); 
      }); 
    }
    else
    {
      this.ErrorMessage="Enter info";
      this.closePopup();
    }
}
  
 
async RedirectMain() { 
        this.router.navigate(['dashboard']);
    } 

    NewUser()
    {
      this.ErrorMessage="";
     this.ExistingUserClass="Hide";
     this.NewUserClass = "Show";
    }
    SignIn()
    {
      this.ErrorMessage="";
       this.ExistingUserClass="Show";
     this.NewUserClass = "Hide";
    }
     async loadingpopup()
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
}
 