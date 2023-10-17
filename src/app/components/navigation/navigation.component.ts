import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  isNavVisible = false;

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
  }

}
