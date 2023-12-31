import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { InputComponent } from '../../layout/components/input/input.component';
import { ButtonComponent } from '../../layout/components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
