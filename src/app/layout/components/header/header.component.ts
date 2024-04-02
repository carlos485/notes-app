import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  buttons: any[]

  constructor() {
    this.buttons = [
      { icon: 'nt-search' },
      { icon: 'nt-home' },
      { icon: 'nt-plus-circle' },
      { icon: 'nt-check-circle' },
      { icon: 'nt-book' }
    ]
  }

}
