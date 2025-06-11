import { Component, inject, viewChild } from '@angular/core';
import { PostFormDataService } from '../../shared/api/services/post-form-data.service';
import { ClientInfoFormComponent } from '../../features/client-info-form/client-info-form.component';
import { AddressFormComponent } from '../../features/address-form/address-form.component';
import { BankDetailsFormComponent } from '../../features/bank-details-form/bank-details-form.component';
import { TransactionInfoFormComponent } from '../../features/transaction-info-form/transaction-info-form.component';
import { DocumentsFormComponent } from '../../features/documents-form/documents-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ClientInfo } from '../../shared/types/ClientInfo';
import { Address } from '../../shared/types/Address';
import { BankDetails } from '../../shared/types/BankDetails';
import { TransactionInfo } from '../../shared/types/TransactionInfo';
import { Country } from '../../shared/types/Country';

@Component({
  selector: 'app-form-widget',
  imports: [
    ClientInfoFormComponent,
    AddressFormComponent,
    BankDetailsFormComponent,
    TransactionInfoFormComponent,
    DocumentsFormComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form-widget.component.html',
  styleUrl: './form-widget.component.scss',
})
export class FormWidgetComponent {
  private postFDService = inject(PostFormDataService);

  clientInfoForm = viewChild(ClientInfoFormComponent);
  addressForm = viewChild(AddressFormComponent);
  bankDetailsForm = viewChild(BankDetailsFormComponent);
  transactionInfoForm = viewChild(TransactionInfoFormComponent);
  documentsForm = viewChild(DocumentsFormComponent);

  public sendData() {
    const clientInfo: ClientInfo = this.clientInfoForm()?.clientInfoForm
      .value as ClientInfo;
    const address: Address = this.addressForm()?.addressForm.value as Address;
    const bankDetails: BankDetails = this.bankDetailsForm()?.bankDetailsForm
      .value as BankDetails;
    const transactionInfo: TransactionInfo = this.transactionInfoForm()
      ?.transactionInfoForm.value as TransactionInfo;
    const documents: Document[] = this.documentsForm()?.documents
      .value as Document[];

    if (typeof address.country !== 'string') {
      address.country = (address.country as Country).name;
    }

    if (clientInfo && address && bankDetails && transactionInfo) {
      this.postFDService.postData({
        clientInfo: clientInfo,
        address: address,
        bankDetails: bankDetails,
        transactionInfo: transactionInfo,
        documents: documents,
      });
    }
  }

  public isValidForm(): boolean {
    return (
      this.clientInfoForm()?.clientInfoForm.valid! &&
      this.addressForm()?.addressForm.valid! &&
      this.bankDetailsForm()?.bankDetailsForm.valid! &&
      this.transactionInfoForm()?.transactionInfoForm.valid! &&
      this.documentsForm()?.documents.valid!
    );
  }
}
