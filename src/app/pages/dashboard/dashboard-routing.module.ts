import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  
  {
    path: 'Capture',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'main-list',
    loadChildren: () => import('./main-list/main-list.module').then( m => m.MainListPageModule)
  },  
   {
    path: 'thumbnail',
    loadChildren: () => import('./thumbnail/thumbnail.module').then( m => m.ThumbnailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
