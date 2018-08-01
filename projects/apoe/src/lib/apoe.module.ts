import {NgModule} from '@angular/core';
import {ButtonComponent} from './button/button.component';
import {AppBarComponent} from './app-bar/app-bar.component';

@NgModule({
  imports: [],
  declarations: [ButtonComponent, AppBarComponent],
  exports: [ButtonComponent, AppBarComponent]
})
export class ApoeModule {
}
