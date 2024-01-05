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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  type: string = 'password';
  iconRight: string = 'nt-eye';
  form: FormGroup;

  constructor(private readonly form_builder: FormBuilder) {
    this.form = this.form_builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  chageType() {
    if (this.type === 'password') {
      this.type = 'text';
      this.iconRight = 'nt-eye-slash';
    } else {
      this.type = 'password';
      this.iconRight = 'nt-eye';
    }
  }

  login() {
    console.log(this.form);
  }
}
