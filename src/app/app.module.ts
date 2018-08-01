import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

// import {ApoeModule} from 'apoe';
import {ApoeModule} from '../../projects/apoe/src/lib/apoe.module';

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
