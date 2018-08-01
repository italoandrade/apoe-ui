import {NgModule} from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {AppBarComponent} from './app-bar/app-bar.component';
import {ApoeUiComponent} from './apoe-ui.component';

const COMPONENTS = [ApoeUiComponent, ButtonComponent, AppBarComponent];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ApoeUiModule {
}
