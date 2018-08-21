import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {navigationDrawerEnterLeaveViewAnimation} from '../../projects/apoe-ui/src/lib/components/navigation-drawer/navigation-drawer.animation';

let START_NAVIGATION_DRAWER = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    navigationDrawerEnterLeaveViewAnimation
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('appBar') appBar;
  @ViewChild('navigationDrawer') navigationDrawer;
  isNavigationDrawerOpen = sessionStorage.getItem('navigation-drawer-open') === 'true' || false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      START_NAVIGATION_DRAWER = 2;
    });
  }

  navigationDrawerOpenAnimation() {
    if (this.isNavigationDrawerOpen) {
      if (START_NAVIGATION_DRAWER < 2) {
        START_NAVIGATION_DRAWER++;
        return 'create';
      } else {
        return 'show';
      }
    } else {
      return 'hide';
    }
  }
}

