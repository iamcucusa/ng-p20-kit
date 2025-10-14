import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from '@core/page-heading.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { StepRoutingService } from '@trial-step/step-routing.service';

@Component({
  selector: 'pg-trial-container',
  templateUrl: './trial-container.component.html',
  styleUrls: ['./trial-container.component.scss'],
  standalone: true,
  imports: [CommonModule, PageHeadingComponent, ButtonModule, RippleModule, RouterModule]
})
export class TrialContainerComponent implements OnInit {
  trialId: string | null = null;
  stepRoutes: Record<string, string> = {};

  constructor(
    private route: ActivatedRoute,
    private stepRoutingService: StepRoutingService
  ) {}

  ngOnInit(): void {
    this.trialId = this.route.snapshot.paramMap.get('id');
    if (this.trialId) {
      this.stepRoutes = this.stepRoutingService.getTrialStepRoutes(this.trialId);
    }
  }
}
