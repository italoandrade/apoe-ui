import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './demo/home/home.component';

import {AppBarComponent} from './demo/app-bar/app-bar.component';
import {ButtonComponent} from './demo/button/button.component';
import {NavigationDrawerComponent} from './demo/navigation-drawer/navigation-drawer.component';

import {NotFoundComponent} from './demo/not-found/not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', redirectTo: '', pathMatch: 'full'},

      {path: 'app-bar', component: AppBarComponent},
      {path: 'button', component: ButtonComponent},
      {path: 'navigation-drawer', component: NavigationDrawerComponent},

      {path: 'not-found', component: NotFoundComponent},
      {path: '**', redirectTo: '/not-found'}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
