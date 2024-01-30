import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
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
import { LoaderService } from '../../../services/loader.service';
import {
  validatePassword,
  validateRepeatPassword,
} from '../../../shared/validators';
import { Router } from '@angular/router';

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
  mediumPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
  strongPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _rt: Router,
    private readonly auth_service: AuthService,
    private readonly toast_service: ToastService,
    private readonly loader_service: LoaderService
  ) {
    this.form = this._fb.group({
      name: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: '',
    });
  }

  ngOnInit(): void {
    if (this.register) {
      this.form.controls['name'].addValidators([
        Validators.required,
        Validators.minLength(6),
      ]);
      this.form.controls['password'].addValidators(validatePassword);
      this.form.controls['repeatPassword'].addValidators([
        Validators.required,
        validateRepeatPassword('password', this.form),
      ]);
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
    console.log(this.form);
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
      } else {
        this.loader_service.setValue(true);
        const body = this.form.getRawValue();
        const method = this.register ? 'register' : 'login';
        this.auth_service[method](body).subscribe({
          next: (e) => {
            console.log(e);
            if (this.register) {
              this.toast_service.showToast(e);
            }
            this._rt.navigate(['/']);
            this.loader_service.setValue(false);
          },
          error: (error) => {
            console.log(error);
            this.toast_service.showToast(error);
            this.loader_service.setValue(false);
          },
        });
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
