import { TransactionType, Currency } from '../general/types';

export interface TransactionInfo {
  transactionType: TransactionType;
  amount: number;
  currency: Currency;
  comment?: string;
}
