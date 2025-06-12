import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customDigitsNLengthValidator } from '../../shared/validators/validators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bank-details-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './bank-details-form.component.html',
  styleUrl: './bank-details-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
