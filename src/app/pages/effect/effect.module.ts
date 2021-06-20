import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EffectPageRoutingModule } from './effect-routing.module';

import { EffectPage } from './effect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffectPageRoutingModule
  ],
  declarations: [EffectPage]
})
export class EffectPageModule {}
