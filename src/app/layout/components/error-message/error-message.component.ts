import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input() form: FormGroup = new FormGroup({ field: new FormControl('') });
  @Input() field: string = 'field';

  get error(): string | undefined {
    const field = this.form.get(this.field);
    if (field?.errors && (field?.touched || field?.dirty)) {
      return Object.keys(field.errors ?? {})[0];
    }
    return undefined;
  }

  get minLength(): string | undefined {
    const field = this.form.get(this.field);
    if (this.error === 'minlength' && field) {
      return field.errors?.['minlength']['requiredLength'];
    }
    return undefined;
  }
}
