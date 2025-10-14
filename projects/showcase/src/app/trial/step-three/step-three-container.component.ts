import { Component } from '@angular/core';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'kit-step-three-container',
  templateUrl: './step-three-container.component.html',
  styleUrls: ['./step-three-container.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, ButtonModule, RippleModule]
})
export class StepThreeContainerComponent {
  constructor() { }
}
