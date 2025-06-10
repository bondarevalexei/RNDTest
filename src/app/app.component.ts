import { Component } from '@angular/core';
import { AddressFormComponent } from '../features/address-form/address-form.component';

@Component({
  selector: 'app-root',
  imports: [AddressFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rnd-point-test';
}
