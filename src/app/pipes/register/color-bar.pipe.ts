import { Pipe, PipeTransform } from '@angular/core';
import { mediumPassword, strongPassword } from '../../shared/validators';

@Pipe({
  name: 'colorBar',
  standalone: true,
})
export class ColorBarPipe implements PipeTransform {
  mediumPassword: RegExp = mediumPassword;
  strongPassword: RegExp = strongPassword;

  transform(value: string): string {
    return strongPassword.test(value)
      ? 'bg-green-600'
      : mediumPassword.test(value)
      ? 'bg-yellow-500'
      : 'bg-red-600';
  }
}
