import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, PopoverComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  buttons: any[]
  showSearch: boolean = false
  hidden: boolean = false
  theme: string = 'nt-moon'

  constructor() {
    this.buttons = [
      { icon: 'nt-search', class: 'bg-teal-300 dark:bg-teal-500' },
      { icon: 'nt-home', class: 'bg-cyan-400 dark:bg-cyan-500' },
      { icon: 'nt-plus-circle', class: 'bg-lime-500 dark:bg-green-600' },
      { icon: 'nt-check-circle', class: 'bg-yellow-400 dark:bg-yellow-500' },
      { icon: 'nt-book', class: 'bg-amber-500 dark:bg-amber-600' }
    ]
  }

  changeTheme(): void {
    this.hidden = true
    setTimeout(() => {
      this.theme = this.theme === 'nt-moon' ? 'nt-sun' : 'nt-moon'
      this.hidden = false
    }, 500)
  }

}
