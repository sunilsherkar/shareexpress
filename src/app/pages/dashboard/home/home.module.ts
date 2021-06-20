import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { HomePageRoutingModule } from './home-routing.module'; 
 import { Platform, AlertController, ToastController } from '@ionic/angular';
 
import { Router, ActivatedRoute } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      IonicModule, 
    HomePageRoutingModule 
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
