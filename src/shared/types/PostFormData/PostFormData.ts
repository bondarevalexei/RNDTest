import { Address } from '../Address';
import { BankDetails } from '../BankDetails';
import { ClientInfo } from '../ClientInfo';
import { TransactionInfo } from '../TransactionInfo';

/**
 * Interface for post data to BE
 */
export interface PostFormData {
  clientInfo: ClientInfo;
  address: Address;
  bankDetails: BankDetails;
  transactionInfo: TransactionInfo;
  documents: Document[];
}
