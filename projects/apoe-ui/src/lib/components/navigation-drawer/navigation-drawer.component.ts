import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

let NAVIGATION_DRAWER_LOADED = false;

@Component({
  selector: 'ap-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean;
  @Input() type = 'dismissible';

  ngOnInit() {
    if (!NAVIGATION_DRAWER_LOADED) {
      NAVIGATION_DRAWER_LOADED = true;
      setTimeout(() => {
        document.body.classList.add('navigation-drawer');
      });
    }

    if (this.type === 'dismissible') {
      document.body.classList.add('dismissible-navigation-drawer-open');
    }
    sessionStorage.setItem('navigation-drawer-open', 'true');
  }

  ngOnDestroy() {
    if (this.type === 'dismissible') {
      document.body.classList.remove('dismissible-navigation-drawer-open');
    }
    sessionStorage.setItem('navigation-drawer-open', 'false');
  }
}
