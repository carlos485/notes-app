import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const mediumPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
export const strongPassword: RegExp =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

export const validatePassword = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.getRawValue() as string;
  const obj = {
    isValid: mediumPassword.test(value) || strongPassword.test(value),
  };
  return obj;
};

export const validateRepeatPassword = (field: string, form: FormGroup) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = form.getRawValue()[field];
    const obj = { isEqual: password === control.getRawValue() };
    return obj;
  };
};
