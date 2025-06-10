import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-info-form',
  imports: [],
  templateUrl: './transaction-info-form.component.html',
  styleUrl: './transaction-info-form.component.scss',
})
export class TransactionInfoFormComponent {
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
