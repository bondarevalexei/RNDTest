import { Component } from '@angular/core';
import { AddressFormComponent } from '../features/address-form/address-form.component';
import { DocumentsFormComponent } from '../features/documents-form/documents-form.component';

@Component({
  selector: 'app-root',
  imports: [AddressFormComponent, DocumentsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rnd-point-test';
}
