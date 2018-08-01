import {Component, ElementRef, HostListener} from '@angular/core';

@Component({
  selector: 'ap-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent {
  constructor(private element: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY) {
      this.element.nativeElement.classList.add('scrolled');
    } else {
      this.element.nativeElement.classList.remove('scrolled');
    }
  }
}
