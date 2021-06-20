import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ProfilePage } from './profile.page';
 import {AuthenticationService} from '../../service/authentication.service';
 import { ExpandableHeaderDirective } from '../../directives/expandable-header.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ProfilePageRoutingModule
       
  ],
  declarations: [ProfilePage,ExpandableHeaderDirective]
})
export class ProfilePageModule {}
