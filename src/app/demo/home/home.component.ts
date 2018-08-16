import {AfterViewInit, Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private appComponent: AppComponent) {
  }

  ngAfterViewInit() {
    this.appComponent.appBar.setTitle('');
  }
}
