import { Component } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'pg-step-four-container',
  templateUrl: './step-four-container.component.html',
  styleUrls: ['./step-four-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, ButtonModule, RippleModule]
})
export class StepFourContainerComponent {
  constructor() { }
}
