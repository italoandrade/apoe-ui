import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

let NAVIGATION_DRAWER_LOADED = false;

@Component({
  selector: 'ap-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() navigationButton: EventEmitter<any> = new EventEmitter();
  @Input() type = 'dismissible';
  @ViewChild('overlay') overlay;
  @Input() isOpen: boolean;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    if (this.type === 'dismissible') {
      document.body.classList.add('dismissible-navigation-drawer-open');
    }
    sessionStorage.setItem('navigation-drawer-open', 'true');
  }

  ngAfterViewInit() {
    if (!NAVIGATION_DRAWER_LOADED) {
      NAVIGATION_DRAWER_LOADED = true;
      setTimeout(() => {
        document.body.classList.add('navigation-drawer');
      }, 1000);
    }
    const parent = this.elementRef.nativeElement;
    const overlay = this.overlay.nativeElement;
    parent.removeChild(this.overlay.nativeElement);
    parent.parentNode.appendChild(overlay);
    this.overlay = overlay;
  }

  ngOnDestroy() {
    if (this.type === 'dismissible') {
      document.body.classList.remove('dismissible-navigation-drawer-open');
    }
    sessionStorage.setItem('navigation-drawer-open', 'false');

    this.overlay.parentNode.removeChild(this.overlay);
  }
}

/*TODO: Develop other than the dismissible version*/
/*TODO: Make this a whole screen component, not just the navigation drawer. Make the animation on the navigation drawer internal*/
/*TODO: Give a animation to the overlay*/
