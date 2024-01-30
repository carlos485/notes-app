import { Pipe, PipeTransform } from '@angular/core';
import { mediumPassword, strongPassword } from '../../shared/validators';

@Pipe({
  name: 'barPercentage',
  standalone: true,
})
export class BarPercentagePipe implements PipeTransform {
  mediumPassword: RegExp = mediumPassword;
  strongPassword: RegExp = strongPassword;

  transform(value: string): string {
    return strongPassword.test(value)
      ? '100%'
      : mediumPassword.test(value)
      ? '70%'
      : value.length === 0
      ? '0%'
      : '20%';
  }
}
