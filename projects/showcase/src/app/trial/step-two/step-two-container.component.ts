import { Component } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'kit-step-two-container',
  templateUrl: './step-two-container.component.html',
  styleUrls: ['./step-two-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, ButtonModule, RippleModule]
})
export class StepTwoContainerComponent {
  constructor() { }
}
