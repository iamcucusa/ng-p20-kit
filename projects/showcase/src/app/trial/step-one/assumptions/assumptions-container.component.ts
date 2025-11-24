import { Component, Input, TemplateRef, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';

import { StepHeadingComponent } from '../../step/step-heading.component';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step';
import type { Trial } from '@trial/trial';
import { AssumptionsNavigationComponent } from '@assumptions/navigation/assumptions-navigation.component';
import { navProviders, overviewSectionToken, trialItemsToken, baseAssumptionsNavItemsToken } from '@assumptions/navigation/navigation.settings';
import type { AssumptionsScenariosNavigationItem } from '@assumptions/navigation/navigation';

@Component({
  selector: 'kit-assumptions-container',
  standalone: true,
  imports: [CommonModule, RouterModule, StepHeadingComponent, ButtonModule, RippleModule, TooltipModule, AssumptionsNavigationComponent],
  providers: [...navProviders],
  template: `
    <div class="pg-step-container pg-step-container--two-column">
      <kit-step-heading
        title="Assumptions"
        [activeTrial]="activeTrial"
        [showTrialContext]="true"
        description="Document key assumptions that will guide your trial design and execution."
        [stepActions]="stepActions">
      </kit-step-heading>

      <div 
        class="pg-sidebar-overlay"
        [class.overlay-visible]="sidebarOpen"
        (click)="closeSidebar()">
      </div>

      <div class="pg-step-container__content">
        @if (!sidebarOpen) {
          <p-button
            icon="pi pi-bars"
            severity="secondary"
            [text]="true"
            [rounded]="true"
            class="pg-sidebar-toggle pg-sidebar-toggle--expand"
            (onClick)="openSidebar()"
            pRipple
            pTooltip="Open Navigation Menu"
            tooltipPosition="right">
          </p-button>
        }

        @if (sidebarOpen) {
          <p-button
            icon="pi pi-times"
            severity="secondary"
            [text]="true"
            [rounded]="true"
            class="pg-sidebar-toggle pg-sidebar-toggle--collapse"
            (onClick)="closeSidebar()"
            pRipple
            pTooltip="Close Navigation Menu"
            tooltipPosition="left">
          </p-button>
        }

        <aside 
          class="pg-step-container__sidebar"
          [class.sidebar-open]="sidebarOpen"
          aria-label="Assumptions Navigation">
          <!-- <ng-container *ngIf="permissionService.canEditStep1$ | async">
        <pg-trial-edit-assumptions
          [trialScenarios]="assumptionsScenarioFacadeService.trialScenarios$ | async"
        ></pg-trial-edit-assumptions>
      </ng-container>
      <ng-container *ngIf="permissionService.canViewStep1$ | async">
        <pg-trial-view-assumptions
          [trial]="parametersFacadeService.activeTrial$ | async"
          [trialScenarios]="assumptionsScenarioFacadeService.trialScenarios$ | async"
        ></pg-trial-view-assumptions>
      </ng-container> -->
          <kit-assumptions-navigation
            [trialNavigation]="trialNavItems"
            [readonlyTrial]="activeTrial?.status === 'Final'"
            [finalScenario]="activeTrial?.finalATScenario"
            [baseNavigation]="baseNavItems"
            [scenariosNavigation]="scenarioItems"
          ></kit-assumptions-navigation>
        </aside>

        <main class="pg-step-container__main">
          <router-outlet></router-outlet>
        </main>
      </div>

      <ng-template #stepActions>
        <p-button
          label="Export"
          icon="pi pi-download"
          variant="outlined"
          (onClick)="exportAssumptions()"
          pRipple>
        </p-button>
      </ng-template>
    </div>
  `
})
export class AssumptionsContainerComponent implements OnInit{
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    this.trialStepFacade.setActiveStepByRoute(step);
  }

  @Input() activeTrial?: Trial | null;

  stepActions!: TemplateRef<unknown>;
  sidebarOpen = false;

  trialNavItems = inject(trialItemsToken);
  baseNavItems = inject(baseAssumptionsNavItemsToken);

  scenarioItems: AssumptionsScenariosNavigationItem[] | null = [
    { slug: inject(overviewSectionToken), title: 'Overview', order: null },
    { slug: 1, title: 'Primary Scenario', order: 1 },
    { slug: 2, title: 'Alternative Scenario', order: 2 },
    { slug: 3, title: 'Conservative Approach', order: 3 },
    { slug: 4, title: 'Aggressive Protocol', order: 4 },
    { slug: 5, title: 'Baseline Study', order: 5 },
    { slug: 6, title: 'Extended Follow-up', order: 6 },
    { slug: 7, title: 'Pilot Study', order: 7 },
    { slug: 8, title: 'Validation Study', order: 8 },
    { slug: 9, title: 'Comparative Analysis', order: 9 },
    { slug: 10, title: 'Long-term Study', order: 10 }
  ];

  exportAssumptions(): void {
    console.log('Exporting assumptions...');
  }

  openSidebar(): void { this.sidebarOpen = true; }
  closeSidebar(): void { this.sidebarOpen = false; }
  toggleSidebar(): void { this.sidebarOpen = !this.sidebarOpen; }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    if (target.innerWidth >= 1200) {
      this.sidebarOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.sidebarOpen) {
      this.closeSidebar();
    }
  }

  ngOnInit(): void {
    if(this.activeTrial && this.activeTrial.assumptionsScenarios && this.activeTrial.assumptionsScenarios.length > 0 && this.activeTrial.status === 'Final') {
      /**
       * this.assumptionsFacadeService.updateFinalScenario(this.activeTrial as Trial);
       */
    }
  }
}
