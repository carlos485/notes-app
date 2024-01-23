import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';

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
export class FormComponent implements OnInit {
  @Input() register: boolean = false;
  @Input() active: boolean = false;
  @Output() select = new EventEmitter<any>();
  form: FormGroup;
  type: string = 'password';
  iconRight: string = 'nt-eye';

  constructor(
    private readonly _fb: FormBuilder,
    private readonly auth_service: AuthService,
    private readonly toast_service: ToastService
  ) {
    this.form = this._fb.group({
      name: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.register) {
      this.form.controls['name'].setValidators(Validators.required);
    }
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

  submit(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
      } else {
        const body = this.form.getRawValue();
        this.auth_service.login(body).subscribe({
          next: (e) => console.log(e),
          error: (err) => {
            console.log(err.error.message);
            this.toast_service.showToast('AAAA');
          },
        });
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
