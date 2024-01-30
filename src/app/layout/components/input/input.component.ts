import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { ColorBarPipe } from '../../../pipes/register/color-bar.pipe';
import { BarPercentagePipe } from '../../../pipes/register/bar-percentage.pipe';
import { TypePasswordPipe } from '../../../pipes/register/type-password.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    FormsModule,
    ErrorMessageComponent,
    ColorBarPipe,
    BarPercentagePipe,
    TypePasswordPipe,
  ],
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

  get error(): boolean {
    const field = this.form.get(this.controlName);
    if (field?.errors && (field?.touched || field?.dirty)) {
      return field.status === 'INVALID';
    }
    return false;
  }

  get password(): string {
    return this.form.getRawValue().password;
  }

  click() {
    if (this.buttonRight) {
      this.selected.emit();
    }
  }
}
