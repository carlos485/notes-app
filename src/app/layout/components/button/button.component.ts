import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() class: string = 'primary';
  @Input() label: string = 'button';
  @Input() icon: string = '';
  loader: boolean | null = false;

  constructor(private readonly loader_service: LoaderService) {}

  ngOnInit(): void {
    this.loader_service.loaderState$.subscribe((value) => {
      this.loader = value;
    });
  }
}
