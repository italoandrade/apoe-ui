import {AfterViewInit, Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {
  constructor(private appComponent: AppComponent) {
  }

  ngAfterViewInit() {
    this.appComponent.appBar.setTitle('Page not found');
  }
}
