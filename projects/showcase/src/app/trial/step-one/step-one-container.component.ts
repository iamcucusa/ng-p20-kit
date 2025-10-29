import { Component, Input, inject, TemplateRef, HostListener } from '@angular/core';
import { StepHeadingComponent } from '../step';
import { TrialStepFacadeService } from '@trial-step/trial-step-facade.service';
import type { TrialStepId } from '@trial-step/trial-step';
import type { Trial } from '@trial/trial';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { AssumptionsNavigationComponent } from '@assumptions/navigation/assumptions-navigation.component';
import { navProviders, trialItems, baseAssumptionsNavItems, overviewSectionToken, newScenarioSectionToken } from '@assumptions/navigation/assumptions-navigation.settings';
import type { AssumptionsScenariosNavigationItem } from '@assumptions/navigation/assumptions-navigation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'kit-step-one-container',
  templateUrl: './step-one-container.component.html',
  standalone: true,
  imports: [StepHeadingComponent, ButtonModule, RippleModule, TooltipModule, AssumptionsNavigationComponent, RouterModule],
  providers: [...navProviders]
})
export class StepOneContainerComponent {
  private trialStepFacade = inject(TrialStepFacadeService);

  @Input()
  set step(step: TrialStepId) {
    /** Set the active step based on the route parameter */
    this.trialStepFacade.setActiveStepByRoute(step);
  }

  /** Active trial data for contextual titles */
  @Input() activeTrial?: Trial | null;

  /** Template reference for step actions */
  stepActions!: TemplateRef<unknown>;
  
  /** Sidebar state for responsive behavior */
  sidebarOpen = false;

  /** Navigation inputs for trial and base navigation items */
  trialNavItems = trialItems;
  baseNavItems = baseAssumptionsNavItems;
  
  /** Mock scenarios data for navigation testing */
  scenarioItems: AssumptionsScenariosNavigationItem[] | null = [
    { 
      slug: inject(overviewSectionToken), 
      title: 'Overview', 
      order: null
    },
    { 
      slug: 'scenario-1', 
      title: 'Primary Scenario', 
      order: 1
    },
    { 
      slug: 'scenario-2', 
      title: 'Alternative Scenario', 
      order: 2
    },
    { 
      slug: 'scenario-3', 
      title: 'Conservative Approach', 
      order: 3
    },
    { 
      slug: 'scenario-4', 
      title: 'Aggressive Protocol', 
      order: 4
    },
    { 
      slug: 'scenario-5', 
      title: 'Baseline Study', 
      order: 5
    },
    { 
      slug: 'scenario-6', 
      title: 'Extended Follow-up', 
      order: 6
    },
    { 
      slug: 'scenario-7', 
      title: 'Pilot Study', 
      order: 7
    },
    { 
      slug: 'scenario-8', 
      title: 'Validation Study', 
      order: 8
    },
    { 
      slug: 'scenario-9', 
      title: 'Comparative Analysis', 
      order: 9
    },
    { 
      slug: 'scenario-10', 
      title: 'Long-term Study', 
      order: 10
    },
    { 
      slug: inject(newScenarioSectionToken), 
      title: 'New Scenario', 
      order: null
    }
  ];

  /**
   * Export assumptions action
   */
  exportAssumptions(): void {
    /** TODO: Implement export logic */
    console.log('Exporting assumptions...');
  }

  /**
   * Open sidebar for mobile/tablet
   */
  openSidebar(): void {
    this.sidebarOpen = true;
  }

  /**
   * Close sidebar (used by overlay click and collapse button)
   */
  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  /**
   * Toggle sidebar visibility for mobile/tablet (legacy method)
   */
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  /**
   * Handle window resize to close sidebar on desktop
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    if (target.innerWidth >= 1200) {
      this.sidebarOpen = false;
    }
  }

  /**
   * Handle escape key to close sidebar
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.sidebarOpen) {
      this.closeSidebar();
    }
  }

}
