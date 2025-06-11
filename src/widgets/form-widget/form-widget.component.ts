import { Component, inject } from '@angular/core';
import { PostFormDataService } from '../../shared/api/services/post-form-data.service';
import { ClientInfoFormComponent } from '../../features/client-info-form/client-info-form.component';
import { AddressFormComponent } from '../../features/address-form/address-form.component';
import { BankDetailsFormComponent } from '../../features/bank-details-form/bank-details-form.component';
import { TransactionInfoFormComponent } from '../../features/transaction-info-form/transaction-info-form.component';
import { DocumentsFormComponent } from '../../features/documents-form/documents-form.component';
import { PostFormData } from '../../shared/types/PostFormData';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

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
  ],
  templateUrl: './form-widget.component.html',
  styleUrl: './form-widget.component.scss',
})
export class FormWidgetComponent {
  private postFDService = inject(PostFormDataService);

  private formData: PostFormData | null = null;
}
