import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { InputComponent } from '../../layout/components/input/input.component';
import { ButtonComponent } from '../../layout/components/button/button.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from '../../layout/components/error-message/error-message.component';
import { AuthService } from '../../services/auth.service';
import { ErrorListComponent } from '../../components/login/error-list/error-list.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
    ErrorListComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  type: string = 'password';
  iconRight: string = 'nt-eye';
  form: FormGroup;

  constructor(
    private readonly form_builder: FormBuilder,
    private readonly auth_service: AuthService
  ) {
    this.form = this.form_builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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

  fields(): any[] {
    const fields = Object.keys(this.form.controls);
    return fields.map((e) => {
      const errors = Object.keys(this.form.controls[e].errors ?? {});
      return { field: e, error: errors[0] };
    });
  }

  fieldsErrors() {
    return this.fields().map((e) => {
      if (e.error === 'required') {
        return `El campo ${e.field} es obligatorio`;
      }
      if (e.error === 'email') {
        return `El campo ${e.field} debe tener el formato email`;
      }
      return '';
    });
  }

  login(): void {
    try {
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        console.log(this.form);
        console.log(this.fieldsErrors());
      } else {
        const body = this.form.getRawValue();
        this.auth_service.login(body).subscribe({
          next: (e) => console.log(e),
          error: (err) => console.log(err),
        });
      }
    } catch (ex) {
      console.log(ex);
    }
  }
}
