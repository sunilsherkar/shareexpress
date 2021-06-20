import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask,AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*import * as x2js from 'x2js';
*/
const TOKEN_KEY = 'UserTypeID';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 // baseUrl: any = "http://localhost:53939/api/" ;
  //basePath: any = "http://localhost:53939/" ;
  baseUrl: any ="http://laxamnjadhav-001-site1.etempurl.com/api/";
  basePath: any = "http://laxamnjadhav-001-site1.etempurl.com/" ;
 
 authenticationState  =  new BehaviorSubject(false);
  isLogout = new BehaviorSubject(true);
  UserTypeID: any = '';
  UserID: any = '';
  fullName: any = '';
  Mobile :any = '';
  userlist : any = [];
  ToUserID : any;
  UploadID =0;
  CurrentDatalist : any =[]
  constructor(private storage: Storage, private plt: Platform ,
  	private afs: AngularFireStorage   ,
     private database: AngularFirestore ,
      private http: HttpClient  
     ) {
  	this.plt.ready().then(() => {
      this.checkToken();
  	});
  }

   async checkToken() {
    await this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
      else {
        this.authenticationState.next(false);
      }
    });

    await this.storage.get("UserID").then((response: any) => {  
      this.UserID = response;
    });

    await this.storage.get('fullName').then(res => {
      this.fullName = res;
    });
  }

  ionViewDidEnter() {
    this.checkToken();
  }
 
  async login(user, pass, uid)
   {
       
  }
  
 
 readUsers(mobile, pass)
  {    
      this.database.collection('users').snapshotChanges().
     subscribe(data => { 
      this.userlist = data.map(e => {  
      	this.storageStore(e,mobile); 
      }); 
      return 0;
  });

 }
   storageStore(res,mobile) 
  {  
  if(res.payload.doc.data()['mobile']==mobile)
  {
    this.fullName =   res.payload.doc.data()['name'];
    this.UserID =   res.payload.doc.data()['mobile']; 
     
           this.storage.set('fullName', this.fullName).then(() => {
            this.authenticationState.next(true);  
            return true;
          },Error => this.authenticationState.next(false));

     }
 }
 
 
  async logout(): Promise<boolean> {
    return await this.storage.clear().then(res => {      
      this.authenticationState.next(false);
      this.isLogout.next(true);
      return true;
    }, Error => {
      console.log(Error);
      return false;
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }

  isAdmin(): boolean {
    return this.authenticationState.value && this.UserTypeID=='1' ? true : false;
  }
  
}