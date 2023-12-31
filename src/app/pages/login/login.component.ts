import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { InputComponent } from '../../layout/componentes/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
