import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customDigitsNLengthValidator } from '../../shared/validators/validators';
import { lengthByDocType } from '../../shared/helpers/helpers';
import { FormDocumentType } from '../../shared/types/general/types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-documents-form',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
  templateUrl: './documents-form.component.html',
  styleUrl: './documents-form.component.scss',
})
export class DocumentsFormComponent implements OnInit {
  documents = new FormArray([] as FormGroup[]);
  documentTypes = ['passport', 'snils', 'inn'];

  documentType = new FormControl<string>('passport', Validators.required);
  documentNumber = new FormControl<string>('', [
    Validators.required,
    customDigitsNLengthValidator(
      lengthByDocType(this.documentType.value! as FormDocumentType)
    ),
  ]);
  issueDate = new FormControl<Date>(new Date(), Validators.required);

  isShowAddForm: boolean = false;

  private createFormControls() {
    this.documentType = new FormControl<string>(
      'passport',
      Validators.required
    );
    this.documentNumber = new FormControl<string>('', [
      Validators.required,
      customDigitsNLengthValidator(
        lengthByDocType('passport' as FormDocumentType)
      ),
    ]);
    this.issueDate = new FormControl<Date>(new Date(), Validators.required);
  }

  public resetFields(): void {
    this.createFormControls();
  }

  ngOnInit() {
    this.createFormControls();

    this.documentType.valueChanges.subscribe((value) => {
      if (value) {
        this.documentNumber.setValidators([
          Validators.required,
          customDigitsNLengthValidator(
            lengthByDocType(value as FormDocumentType)
          ),
        ]);
        this.documentNumber.updateValueAndValidity();
      }
    });
  }

  public addDocument(): void {
    this.isShowAddForm = false;

    this.documents.push(
      new FormGroup({
        documentType: new FormControl(
          this.documentType.value,
          Validators.required
        ),
        documentNumber: new FormControl(this.documentNumber.value, [
          Validators.required,
          customDigitsNLengthValidator(
            lengthByDocType(this.documentType.value! as FormDocumentType)
          ),
        ]),
        issueDate: new FormControl(this.issueDate.value, Validators.required),
      })
    );

    this.resetFields();
  }
}
