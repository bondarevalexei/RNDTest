import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormWidgetComponent } from '../widgets/form-widget/form-widget.component';

@Component({
  selector: 'app-root',
  imports: [FormWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
