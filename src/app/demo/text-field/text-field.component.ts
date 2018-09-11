import {AfterViewInit, Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-button',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements AfterViewInit {
  constructor(private appComponent: AppComponent) {
  }

  ngAfterViewInit() {
    this.appComponent.appBar.setTitle('Text field demo');
  }
}
