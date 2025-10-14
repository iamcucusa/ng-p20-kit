import { Component } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'pg-step-one-container',
  templateUrl: './step-one-container.component.html',
  styleUrls: ['./step-one-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, ButtonModule, RippleModule]
})
export class StepOneContainerComponent {
  constructor() { }
}
