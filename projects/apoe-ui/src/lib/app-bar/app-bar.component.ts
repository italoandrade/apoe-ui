import {Component, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'ap-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  @HostBinding('class.scrolled') isScrolled: boolean;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = !!window.scrollY;
  }

}
