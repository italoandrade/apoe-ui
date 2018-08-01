import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './demo/home/home.component';
import {ButtonComponent} from './demo/button/button.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', redirectTo: '', pathMatch: 'full'},
      {path: 'button', component: ButtonComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
