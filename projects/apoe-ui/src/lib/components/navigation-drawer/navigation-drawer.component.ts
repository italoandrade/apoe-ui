import {Component, Input} from '@angular/core';

@Component({
  selector: 'ap-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss']
})
export class NavigationDrawerComponent {
  @Input() isOpen: boolean;
}
