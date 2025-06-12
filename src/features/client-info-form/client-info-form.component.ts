import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import {
  customClientAgeValidator,
  customPassportValidator,
  customPhoneValidator,
} from '../../shared/validators/validators';
import { Gender } from '../../shared/types/general/types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-client-info',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatIconModule,
  ],
  templateUrl: './client-info-form.component.html',
  styleUrl: './client-info-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientInfoFormComponent {
  constructor(private da: DateAdapter<Date>) {
    this.da.setLocale('en-GB');
  }

  readonly maxDate = new Date();

  clientInfoForm = new FormGroup({
    firstName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    lastName: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    middleName: new FormControl<string | null>(null, [
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    gender: new FormControl<Gender>('male', Validators.required),
    birthDate: new FormControl<Date>(new Date(), [
      Validators.required,
      customClientAgeValidator(),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      // if somewhere we need to use other regexp, we can past it in validator
      customPhoneValidator(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/),
    ]),
    passport: new FormControl<string>('', [
      Validators.required,
      // different regex for different countries
      customPassportValidator(/^\d{4} \d{6}$/),
    ]),
  });
}
