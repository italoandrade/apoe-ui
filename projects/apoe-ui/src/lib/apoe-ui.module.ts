import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';

import {ApoeUiComponent} from './apoe-ui.component';
import {ButtonComponent} from './components/button/button.component';
import {AppBarComponent} from './components/app-bar/app-bar.component';
import {NavigationDrawerComponent} from './components/navigation-drawer/navigation-drawer.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {TextFieldDirective} from './components/text-field/text-field.directive';

const COMPONENTS = [
  ApoeUiComponent,

  ButtonComponent,
  AppBarComponent,
  NavigationDrawerComponent,
  TextFieldComponent,
  TextFieldDirective
];

@NgModule({
  imports: [BrowserModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ApoeUiModule {
}
