import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { yearsDiffCalculator } from '../helpers/helpers';

export function customClientAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const age = yearsDiffCalculator(control.value);
    return age >= 18 ? null : { forbiddenAge: { value: age } };
  };
}

export function customPhoneValidator(phoneRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return phoneRegex.test(control.value) ? null : { invalidPhone: true };
  };
}

export function customPassportValidator(passportRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return passportRegex.test(control.value) ? null : { invalidPassport: true };
  };
}