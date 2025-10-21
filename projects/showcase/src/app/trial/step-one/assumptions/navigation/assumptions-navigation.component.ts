import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import {
  AssumptionsBaseNavigationItem,
  AssumptionsNavigationItem,
  AssumptionsScenariosNavigationItem,
  TrialAssumptionsNavigationItem,
} from '@assumptions/navigation/assumptions-navigation';
import { NewScenarioSection, ScenariosOverviewSection } from '@assumptions/assumptions';
import { newScenarioSectionToken, overviewSectionToken } from '@assumptions/navigation/assumptions-navigation.settings';

@Component({
  selector: 'kit-assumptions-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, RippleModule, StyleClassModule],
  template: `
    <div class="pg-navigation-container">
      <ul class="pg-navigation-list">
        @for (trialItem of trialItems; track $index) {
          <li>
            @if (trialItem.disabled) {
              <a
                [attr.disabled]="trialItem.disabled"
                pRipple
                class="pg-nav-link pg-item"
              >
                <span class="font-medium">{{ trialItem.title }}</span>
              </a>
            } @else {
              <a
                [routerLink]="trialItem.slug ? ['./', trialItem.slug] : ['./']"
                [routerLinkActive]="'active'"
                [routerLinkActiveOptions]="{ exact: true }"
                pRipple
                class="pg-nav-link"
              >
                <span class="font-medium">{{ trialItem.title }}</span>
              </a>
            }
          </li>
        }
        @if (scenarioItems) {
          <li class="pg-scenario-section">
            @if (scenarioItems.length > 0) {
              <a
                pRipple
                class="pg-scenario-header"
                (click)="toggleScenarios()"
              >
                <span class="font-medium">Scenarios</span>
                <i class="pi ml-auto mr-1" [class.pi-chevron-down]="scenariosExpanded" [class.pi-chevron-right]="!scenariosExpanded"></i>
              </a>
              <ul class="pg-scenario-list" [class.hidden]="!scenariosExpanded">
              @for (scenarioItem of scenarioItems; track $index) {
                <li class="pg-scenario-item">
                  @if (scenarioItem.disabled) {
                    <a
                      [attr.disabled]="scenarioItem.disabled"
                      pRipple
                      class="pg-scenario-link pg-item"
                    >
                      <span class="font-medium">{{ scenarioItem.title }}</span>
                    </a>
                  } @else {
                    <a
                      pRipple
                      [routerLink]="
                        scenarioItem.slug === overview
                          ? ['./', overview]
                          : ['./', scenarioItem.slug, 'scenario']
                      "
                      [routerLinkActive]="'active'"
                      [routerLinkActiveOptions]="{ exact: true }"
                      class="pg-scenario-link"
                    >
                      <span class="font-medium">{{ scenarioItem.title }}</span>
                      @if (scenarioItem?.order === 1 && !readonlyTrial) {
                        <div class="pg-status-indicator pg-status-indicator--warning"></div>
                      }
                      @if (readonlyTrial && finalScenario === scenarioItem?.idScenario) {
                        <div class="pg-status-indicator pg-status-indicator--success"></div>
                      }
                    </a>
                  }
                </li>
              }
              </ul>
            }
          </li>
        }
      </ul>
    </div>
  `,
  styleUrls: ['./assumptions-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssumptionsNavigationComponent {
  @Input() readonlyTrial = false;
  @Input() finalScenario: number | null | undefined = null;
  
  /** Controls scenarios section visibility state */
  scenariosExpanded = true;
  
  /**
   * Toggle scenarios section visibility
   */
  toggleScenarios(): void {
    this.scenariosExpanded = !this.scenariosExpanded;
  }

  trialItems: (TrialAssumptionsNavigationItem | AssumptionsNavigationItem)[] = [];

  baseItems: AssumptionsBaseNavigationItem[] = [];

  scenarioItems: AssumptionsScenariosNavigationItem[] | null = [];

  items: AssumptionsNavigationItem[] = [];

  /** Overview section token injected for template usage */
  public overview = inject(overviewSectionToken) as ScenariosOverviewSection;
  public newScenario = inject(newScenarioSectionToken) as NewScenarioSection;

  get newItem(): AssumptionsScenariosNavigationItem {
    return {
      slug: this.newScenario,
      title: 'New Scenario',
      sections: undefined,
      order: null,
    };
  }

  @Input() set trialNavigation(navigation: (TrialAssumptionsNavigationItem | AssumptionsNavigationItem)[]) {
    this.trialItems = [...navigation];
  }

  @Input() set baseNavigation(navigation: AssumptionsBaseNavigationItem[]) {
    this.baseItems = [...navigation];
  }

  @Input() set scenariosNavigation(navigation: AssumptionsScenariosNavigationItem[] | null) {
    if (navigation) {
      this.scenarioItems = [...navigation];
    } else {
      this.scenarioItems = navigation;
    }
  }
}
