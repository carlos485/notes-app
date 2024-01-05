import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() iconLeft: string | undefined;
  @Input() iconRight: string | undefined;
  @Input() buttonRight: boolean = false;
  @Output() selected = new EventEmitter<any>();

  click() {
    if (this.buttonRight) {
      this.selected.emit();
    }
  }
}
