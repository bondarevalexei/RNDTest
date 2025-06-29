import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { yearsDiffCalculator } from '../helpers/helpers';

export function customClientAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return { nullErr: 'null' };

    const age = yearsDiffCalculator(control.value as Date);
    return age >= 18 ? null : { forbiddenAge: { value: age } };
  };
}

export function customPhoneValidator(phoneRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return { nullErr: 'null' };
    if (control.value.length > 18) return { invalidPhone: 'length > 18' };
    return phoneRegex.test(control.value) ? null : { invalidPhone: true };
  };
}

export function customPassportValidator(passportRegex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return { nullErr: 'null' };
    if (control.value.length > 11) return { invalidPassport: 'length > 11' };
    return passportRegex.test(control.value) ? null : { invalidPassport: true };
  };
}

export function customDigitsNLengthValidator(length: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return { nullErr: 'null' };

    if (control.value.length !== length)
      return { invalidDetail: `Длина должна составлять ${length} символов` };

    return /^\d+$/.test(control.value)
      ? null
      : { invalidDetail: 'Необходимо использовать только цифры' };
  };
}
