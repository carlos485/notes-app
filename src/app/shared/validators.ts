import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export const mediumPassword: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
export const strongPassword: RegExp =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

export const validatePassword = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value as string;
  const obj = {
    isValid: mediumPassword.test(value) || strongPassword.test(value),
  };
  return obj;
};

export const validateRepeatPassword = (
  control: AbstractControl,
  field: string,
  form: FormGroup
): ValidationErrors | null => {
  const value = control.value as string;
  //   const password = this.form.getRawValue().password;
  //       return password === control.value;
  const obj = {
    isValid: mediumPassword.test(value) || strongPassword.test(value),
  };
  return obj;
};
