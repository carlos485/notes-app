import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  @Input() show: boolean = false;
}
