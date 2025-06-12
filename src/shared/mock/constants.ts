import { TransactionType } from '../types/general/types';
import { TranslationType } from '../types/TranslationType';

export const CURRENCIES: string[] = ['USD', 'RUB', 'EUR'];

export const GENDERS: string[] = ['male', 'female'];

export const TRANSACTION_TYPES: TranslationType<TransactionType>[] = [
  { type: 'transfer', ruTitle: 'Перевод' },
  { type: 'payment', ruTitle: 'Платеж' },
  { type: 'replenishment', ruTitle: 'Пополнение' },
];

export const DOCUMENT_TYPES: TranslationType<string>[] = [
  { type: 'passport', ruTitle: 'Паспорт' },
  { type: 'snils', ruTitle: 'СНИЛС' },
  { type: 'inn', ruTitle: 'ИНН' },
];
