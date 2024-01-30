import { Pipe, PipeTransform } from '@angular/core';
import { mediumPassword, strongPassword } from '../../shared/validators';

@Pipe({
  name: 'typePassword',
  standalone: true,
})
export class TypePasswordPipe implements PipeTransform {
  mediumPassword: RegExp = mediumPassword;
  strongPassword: RegExp = strongPassword;

  transform(value: string): string {
    return strongPassword.test(value)
      ? 'Contraseña Segura'
      : mediumPassword.test(value)
      ? 'Contraseña Aceptable'
      : value.length === 0
      ? ''
      : 'Contraseña insegura';
  }
}
