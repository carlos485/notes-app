import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../../layout/components/input/input.component';
import { ErrorMessageComponent } from '../../../layout/components/error-message/error-message.component';
import { ButtonComponent } from '../../../layout/components/button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    ErrorMessageComponent,
    NgClass,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() register: boolean = false;
  @Input() active: boolean = false;
  @Output() select = new EventEmitter<any>();
  form: FormGroup;
  type: string = 'password';
  iconRight: string = 'nt-eye';

  constructor(private readonly _fb: FormBuilder) {
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  chageType(): void {
    if (this.type === 'password') {
      this.type = 'text';
      this.iconRight = 'nt-eye-slash';
    } else {
      this.type = 'password';
      this.iconRight = 'nt-eye';
    }
  }
}
