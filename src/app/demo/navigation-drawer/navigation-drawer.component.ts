import {AfterViewInit, Component} from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements AfterViewInit {
  constructor(public appComponent: AppComponent) {
  }

  ngAfterViewInit() {
    this.appComponent.appBar.setTitle('Navigation drawer demo');
  }
}

