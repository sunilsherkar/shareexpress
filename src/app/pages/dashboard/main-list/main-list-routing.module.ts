import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { MainListPage } from './main-list.page';

const routes: Routes = [
  {
    path: '',
    component: MainListPage
  },
  {
    path: 'Capture',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  }
  
   
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainListPageRoutingModule {}
