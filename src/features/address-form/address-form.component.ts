import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, Observable, startWith } from 'rxjs';
import { COUNTRIES } from '../../shared/mock/Countries/';
import { AsyncPipe } from '@angular/common';
import { Country } from '../../shared/types/Country';

@Component({
  selector: 'app-address-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    AsyncPipe,
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  options: Country[] = COUNTRIES;
  filteredOptions!: Observable<Country[]>;

  addressForm = new FormGroup({
    country: new FormControl<Country | string>('', Validators.required),
    region: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    city: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    street: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    house: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    apartment: new FormControl<string | null>(
      null,
      Validators.pattern(/^\d+$/)
    ),
    postalCode: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^\d{6}$/),
      Validators.maxLength(6),
    ]),
  });

  ngOnInit() {
    this.filteredOptions = this.addressForm.controls.country.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) =>
        option.name.toLowerCase().substring(0, name.length) === filterValue
    );
  }
}
