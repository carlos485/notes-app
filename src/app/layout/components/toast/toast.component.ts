import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NgClass } from '@angular/common';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit {
  message: string | null = null;
  show: boolean = false;

  constructor(private toast_service: ToastService) {}

  ngOnInit(): void {
    this.toast_service.toastState$.subscribe((message) => {
      if (message) {
        this.message = message;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 5000);
      }
    });
  }
}
