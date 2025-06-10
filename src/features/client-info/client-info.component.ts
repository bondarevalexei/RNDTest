import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  customClientAgeValidator,
  customPassportValidator,
  customPhoneValidator,
} from '../../shared/validators/validators';

@Component({
  selector: 'app-client-info',
  imports: [ReactiveFormsModule],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent {
  clientInfoForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    middleName: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    gender: new FormControl<Gender>('male', Validators.required),
    birthDate: new FormControl<Date>(new Date(), [
      Validators.required,
      customClientAgeValidator,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      // if somewhere we need to use other regexp, we can past it in validator
      customPhoneValidator(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/),
    ]),
    passport: new FormControl('', [
      Validators.required,
      // different regex for different countries
      customPassportValidator(/^\d{4} \d{6}$/),
    ]),
  });
}
