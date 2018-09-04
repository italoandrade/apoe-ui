import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {ApoeUiModule} from '../../projects/apoe-ui/src/lib/apoe-ui.module';
import {AppRoutingModule} from './app-routing.module';

import {ButtonComponent} from './demo/button/button.component';
import {HomeComponent} from './demo/home/home.component';

import {AppBarComponent} from './demo/app-bar/app-bar.component';
import {NavigationDrawerComponent} from './demo/navigation-drawer/navigation-drawer.component';

import {NotFoundComponent} from './demo/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    AppBarComponent,
    ButtonComponent,
    NavigationDrawerComponent,

    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApoeUiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
