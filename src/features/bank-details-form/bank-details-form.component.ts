import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customDigitsNLengthValidator } from '../../shared/validators/validators';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bank-details-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './bank-details-form.component.html',
  styleUrl: './bank-details-form.component.scss',
})
export class BankDetailsFormComponent {
  bankDetailsForm = new FormGroup({
    accountNumber: new FormControl<string>('', [
      Validators.required,
      customDigitsNLengthValidator(20),
    ]),
    bic: new FormControl<string>('', [
      Validators.required,
      customDigitsNLengthValidator(9),
    ]),
    bankName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    correspondentAccount: new FormControl<string>('', [
      Validators.required,
      customDigitsNLengthValidator(20),
    ]),
  });
}
