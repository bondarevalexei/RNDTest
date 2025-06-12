import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Currency, TransactionType } from '../../shared/types/general/types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CURRENCIES, TRANSACTION_TYPES } from '../../shared/mock/constants';

@Component({
  selector: 'app-transaction-info-form',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transaction-info-form.component.html',
  styleUrl: './transaction-info-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionInfoFormComponent {
  transactions = TRANSACTION_TYPES;
  currencies = CURRENCIES;

  transactionInfoForm = new FormGroup({
    transactionType: new FormControl<TransactionType>(
      'payment',
      Validators.required
    ),
    amount: new FormControl<number>(0.01, [
      Validators.required,
      Validators.min(0.01),
    ]),
    currency: new FormControl<Currency>('USD', Validators.required),
    comment: new FormControl<string | null>(null, Validators.maxLength(200)),
  });
}
