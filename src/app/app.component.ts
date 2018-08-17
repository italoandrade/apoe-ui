import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('appBar') appBar;
  @ViewChild('navigationDrawer') navigationDrawer;
  isNavigationDrawerOpen = false;
}

