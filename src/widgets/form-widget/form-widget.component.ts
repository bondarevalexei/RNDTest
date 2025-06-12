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
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { ClientInfo } from '../../shared/types/ClientInfo';
import { Address } from '../../shared/types/Address';
import { BankDetails } from '../../shared/types/BankDetails';
import { TransactionInfo } from '../../shared/types/TransactionInfo';
import { Country } from '../../shared/types/Country';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-widget',
  imports: [
    //Components
    ClientInfoFormComponent,
    AddressFormComponent,
    BankDetailsFormComponent,
    TransactionInfoFormComponent,
    DocumentsFormComponent,
    //Modules
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './form-widget.component.html',
  styleUrl: './form-widget.component.scss',
})
export class FormWidgetComponent {
  private _snackBar = inject(MatSnackBar);
  private _postFDService = inject(PostFormDataService);

  clientInfoForm = viewChild(ClientInfoFormComponent);
  addressForm = viewChild(AddressFormComponent);
  bankDetailsForm = viewChild(BankDetailsFormComponent);
  transactionInfoForm = viewChild(TransactionInfoFormComponent);
  documentsForm = viewChild(DocumentsFormComponent);
  stepper = viewChild<MatStepper>('stepper');

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
      this._postFDService.postData({
        clientInfo: clientInfo,
        address: address,
        bankDetails: bankDetails,
        transactionInfo: transactionInfo,
        documents: documents,
      });

      this._snackBar.open(
        'Данные успешно отправлены. Откройте консольно чтобы увидеть их!',
        'Понятно'
      );
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

  public resetForms() {
    this.clientInfoForm()?.clientInfoForm.reset();
    this.addressForm()?.addressForm.reset();
    this.bankDetailsForm()?.bankDetailsForm.reset();
    this.transactionInfoForm()?.transactionInfoForm.reset();
    this.documentsForm()?.documents.reset();
    this.documentsForm()?.documents.clear();

    this.clientInfoForm()?.clientInfoForm.markAsPristine();
    this.clientInfoForm()?.clientInfoForm.markAsUntouched();
    this.addressForm()?.addressForm.markAsPristine();
    this.addressForm()?.addressForm.markAsUntouched();
    this.bankDetailsForm()?.bankDetailsForm.markAsPristine();
    this.bankDetailsForm()?.bankDetailsForm.markAsUntouched();
    this.transactionInfoForm()?.transactionInfoForm.markAsPristine();
    this.transactionInfoForm()?.transactionInfoForm.markAsUntouched();
    this.documentsForm()?.documents.markAsPristine();
    this.documentsForm()?.documents.markAsUntouched();

    this.stepper()!.reset();
  }
}
