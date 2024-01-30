import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const mediumPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
export const strongPassword: RegExp =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

export const validatePassword = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.getRawValue() as string;
  if (!mediumPassword.test(value) && !strongPassword.test(value)) {
    return { isInvalid: true };
  }
  return null;
};

export const validateRepeatPassword = (field: string, form: FormGroup) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = form.getRawValue()[field];
    if (password !== control.getRawValue()) {
      return { isDifferent: true };
    }
    return null;
  };
};
