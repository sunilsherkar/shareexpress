import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectPage } from './effect.page';

const routes: Routes = [
  {
    path: '',
    component: EffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EffectPageRoutingModule {}
