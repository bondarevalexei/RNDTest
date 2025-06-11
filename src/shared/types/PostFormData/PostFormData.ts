import {
  Currency,
  FormDocumentType,
  Gender,
  TransactionType,
} from '../general/types';

/**
 * Interface for post data to BE
 */
export interface PostFormData {
  clientInfo: {
    firstName: string;
    lastName: string;
    middleName?: string;
    gender: Gender;
    birthDate: Date;
    email: string;
    phone: string;
    passport: string;
  };
  address: {
    country: string;
    region: string;
    city: string;
    street: string;
    house: string;
    apartment?: string;
    postalCode: string;
  };
  bankDetails: {
    accountNumber: string;
    bic: string;
    bankName: string;
    correspondentAccount: string;
  };
  transactionInfo: {
    transactionType: TransactionType;
    amount: number;
    currency: Currency;
    comment?: string;
  };
  documents: {
    documentType: FormDocumentType;
    documentNumber: string;
    issueDate: Date;
  }[];
}
