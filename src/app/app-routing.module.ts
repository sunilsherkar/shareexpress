import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/dashboard/profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
    },
    {
        path: 'thumbnail',
        loadChildren: () => import('./pages/dashboard/thumbnail/thumbnail.module').then(m => m.ThumbnailPageModule)
    },
    {
        path: 'main-list',
        loadChildren: () => import('./pages/dashboard/main-list/main-list.module').then(m => m.MainListPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/dashboard/home/home.module').then(m => m.HomePageModule)
    },  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'emoji',
    loadChildren: () => import('./pages/emoji/emoji.module').then( m => m.EmojiPageModule)
  },
  {
    path: 'effect',
    loadChildren: () => import('./pages/effect/effect.module').then( m => m.EffectPageModule)
  },


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
