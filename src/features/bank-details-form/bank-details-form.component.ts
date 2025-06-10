import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customBankDetailsValidator } from '../../shared/validators/validators';

@Component({
  selector: 'app-bank-details-form',
  imports: [],
  templateUrl: './bank-details-form.component.html',
  styleUrl: './bank-details-form.component.scss',
})
export class BankDetailsFormComponent {
  bankDetailsForm = new FormGroup({
    accountNumber: new FormControl<string>('', [
      Validators.required,
      customBankDetailsValidator(20),
    ]),
    bic: new FormControl<string>('', [
      Validators.required,
      customBankDetailsValidator(9),
    ]),
    bankName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    correspondentAccount: new FormControl<string>('', [
      Validators.required,
      customBankDetailsValidator(20),
    ]),
  });
}
