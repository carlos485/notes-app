import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, FormsModule, ErrorMessageComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() form: FormGroup = new FormGroup({ field: new FormControl('') });
  @Input() controlName: string = 'field';
  @Input() type: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() iconLeft: string | undefined;
  @Input() iconRight: string | undefined;
  @Input() buttonRight: boolean = false;
  @Input() showBar: boolean = false;
  @Output() selected = new EventEmitter<any>();
  mediumPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  strongPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  get error(): boolean {
    const field = this.form.get(this.controlName);
    if (field?.errors && (field?.touched || field?.dirty)) {
      return field.status === 'INVALID';
    }
    return false;
  }

  get barProperties(): any {
    const password = this.form.getRawValue().password;
    let color: string;
    let percentage: string;
    let label: string;
    if (password.length === 0) {
      color = '';
      percentage = '0%';
      label = '';
    } else if (this.strongPassword.test(password)) {
      color = 'bg-green-600';
      percentage = '100%';
      label = 'Segura';
    } else if (this.mediumPassword.test(password)) {
      color = 'bg-yellow-500';
      percentage = '70%';
      label = 'Aceptable';
    } else {
      color = 'bg-red-600';
      percentage = '20%';
      label = 'Debil';
    }
    return { color, percentage, label };
  }

  click() {
    if (this.buttonRight) {
      this.selected.emit();
    }
  }
}
