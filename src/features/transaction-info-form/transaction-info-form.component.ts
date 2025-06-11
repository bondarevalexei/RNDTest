import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Currency, TransactionType } from '../../shared/types/general/types';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './transaction-info-form.component.html',
  styleUrl: './transaction-info-form.component.scss',
})
export class TransactionInfoFormComponent {
  transactions = TRANSACTION_TYPES;
  currencies = CURRENCIES;

  transactionInfoForm = new FormGroup({
    transactionType: new FormControl<TransactionType>(
      'payment',
      Validators.required
    ),
    amount: new FormControl<number>(0.0, [
      Validators.required,
      Validators.min(0.01),
    ]),
    currency: new FormControl<Currency>('USD', Validators.required),
    comment: new FormControl<string | null>(null, Validators.maxLength(200)),
  });
}
