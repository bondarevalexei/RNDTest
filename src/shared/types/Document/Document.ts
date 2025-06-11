import { FormDocumentType } from '../general/types';

export interface Document {
  documentType: FormDocumentType;
  documentNumber: string;
  issueDate: Date;
}
