import {AfterViewInit, Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  constructor(private appComponent: AppComponent) {
  }

  ngAfterViewInit() {
    this.appComponent.appBar.setTitle('Button demo');
  }
}
