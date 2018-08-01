import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ApoeModule} from 'apoe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApoeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
