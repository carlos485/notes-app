import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() class: string = 'primary';
  @Input() label: string = 'button';
  @Input() icon: string = '';
  loader = false;
}
