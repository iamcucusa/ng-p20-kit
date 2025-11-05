import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import type { Trial } from '@trial/trial';
import { parametersControlsToken } from '@assumptions/sections/parameters.settings';
import { DashIfEmptyPipe } from '@core/dash-if-empty.pipe';
import { formatStudyNumber } from '@trial/study-number.utils';

/**
 * Parameters View Component
 * 
 * Displays trial parameters in read-only mode including:
 * - Trial basic information
 * - Study design details
 * - Timeline information
 * - Regulatory requirements
 * - Data collection parameters
 * 
 * @example
 * ```html
 * <kit-parameters-view [activeTrial]="trial">
 * </kit-parameters-view>
 * ```
 */
@Component({
  selector: 'kit-parameters-view',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    BadgeModule,
    TagModule,
    ButtonModule,
    DashIfEmptyPipe
  ],
  template: `
    @if (!activeTrial) {
      <div class="pg-parameters-view-empty">
        <div class="pg-empty-icon">📋</div>
        <h5 class="pg-empty-title">No Trial Data Available</h5>
        <p class="pg-empty-description">
          Trial parameters will be displayed here once a trial is selected.
        </p>
      </div>
    } @else {
      <div class="pg-parameters-view-container">
        <main class="pg-parameters-view-main">
          <div class="pg-card pg-card--padding-md">
            <div class="pg-card__header">
              <div class="pg-card__title">Trial Parameters</div>
              <p class="pg-card__description">Review your trial parameters.</p>
            </div>
            <div class="pg-card__content">
              <ul class="pg-parameters-list">
            <!-- Trial Number and Title -->
            <li class="pg-parameters-list-item">
              <div class="pg-parameters-list-item__two-column pg-parameters-list-item__two-column--trial-number">
                <!-- First Column: Trial Number -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__content">
                    <div class="pg-parameters-list-item__label">{{ parametersControls.studyNumber.title }}</div>
                    <div class="pg-trial-number" [class.pg-empty-state]="!activeTrial.parameters.studyNumber">
                      {{ formattedStudyNumber }}
                    </div>
                    @if (activeTrial.parameters.ctmsTrial) {
                      <p-button
                        [label]="parametersControls.ctmsTrial.title"
                        [text]="true"
                        [icon]="'pi pi-angle-right'"
                        iconPos="right"
                        size="small"
                        class="pg-parameters-list-item__ctms-link"
                        (onClick)="onCtmsTrialClick()">
                      </p-button>
                    }
                  </div>
                </div>
                
                <!-- Second Column: Title -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__content">
                    <div class="pg-parameters-list-item__label">{{ parametersControls.studyName.title }}</div>
                    <div class="pg-parameters-list-item__value pg-parameters-list-item__value--wide" [class.pg-empty-state]="!activeTrial.parameters.studyName">
                      {{ activeTrial.parameters.studyName | dashIfEmpty }}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <!-- Phase and Milestone -->
            <li class="pg-parameters-list-item">
              <div class="pg-parameters-list-item__phase-milestone">
                <!-- Phase Column -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__content">
                    <div class="pg-parameters-list-item__label">{{ parametersControls.studyPhase.title }}</div>
                    @if (activeTrial.parameters.studyPhase) {
                      <p-tag class="pg-parameters-list-item__phase-tag">
                        <div class="pg-parameters-list-item__phase-content">
                          <span class="pg-parameters-list-item__phase-text">
                            {{ activeTrial.parameters.studyPhase }}
                          </span>
                        </div>
                      </p-tag>
                    } @else {
                      <span class="pg-parameters-list-item__value" [class.pg-empty-state]="!activeTrial.parameters.studyPhase">{{ activeTrial.parameters.studyPhase | dashIfEmpty }}</span>
                    }
                  </div>
                </div>
                
                <!-- Milestone Column -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__milestone-container">
                    <div class="pg-parameters-list-item__milestone">
                      <div class="pg-parameters-list-item__milestone-icon-wrapper">
                        <i class="pi pi-check-circle pg-parameters-list-item__milestone-icon"></i>
                      </div>
                      <div class="pg-parameters-list-item__milestone-content">
                        <div class="pg-parameters-list-item__label">{{ parametersControls.milestone.title }}</div>
                        <p class="pg-parameters-list-item__value pg-parameters-list-item__value--milestone" [class.pg-empty-state]="!activeTrial.parameters.milestone">
                          {{ activeTrial.parameters.milestone | dashIfEmpty }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <!-- Divider -->
            <li class="pg-parameters-list-item__divider">
              <p-divider></p-divider>
            </li>

            <!-- Therapeutic Area and HPC Biberach -->
            <li class="pg-parameters-list-item">
              <div class="pg-parameters-list-item__grid">
                <div class="pg-parameters-list-item__grid-item pg-parameters-list-item__grid-item--two-thirds">
                  <div class="pg-parameters-list-item__label">{{ parametersControls.therapeuticArea.title }}</div>
                  <p class="pg-parameters-list-item__value" [class.pg-empty-state]="activeTrial.parameters.therapeuticArea === 'Others' ? !activeTrial.parameters.others : !activeTrial.parameters.therapeuticArea">
                    {{
                      activeTrial.parameters.therapeuticArea === 'Others'
                        ? (activeTrial.parameters.others | dashIfEmpty)
                        : (activeTrial.parameters.therapeuticArea | dashIfEmpty)
                    }}
                  </p>
                </div>
                <div class="pg-parameters-list-item__grid-item pg-parameters-list-item__grid-item--one-third">
                  <div class="pg-parameters-list-item__label">{{ parametersControls.hpcBiberach.title }}</div>
                  <div class="pg-parameters-list-item__value">
                    {{
                      activeTrial.parameters.hpcBiberach === 'yes'
                        ? 'Yes, conducted at HPC Biberach'
                        : 'No, not conducted at HPC Biberach'
                    }}
                  </div>
                </div>
              </div>
            </li>

            <!-- Indication -->
            <li class="pg-parameters-list-item">
              <div class="pg-parameters-list-item__content">
                <div class="pg-parameters-list-item__label">{{ parametersControls.indication.title }}</div>
                <div class="pg-parameters-list-item__value pg-parameters-list-item__value--wide" [class.pg-empty-state]="!activeTrial.parameters.indication">
                  {{ activeTrial.parameters.indication | dashIfEmpty }}
                </div>
              </div>
            </li>

            <!-- BI Compound and MOA -->
            <li class="pg-parameters-list-item">
              <div class="pg-parameters-list-item__two-column pg-parameters-list-item__two-column--bi-compound">
                <!-- First Column: BI Compound -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__content">
                    <div class="pg-parameters-list-item__label">{{ parametersControls.biCompound.title }}</div>
                    <div class="pg-parameters-list-item__value" [class.pg-empty-state]="!activeTrial.parameters.biCompound">
                      {{ activeTrial.parameters.biCompound | dashIfEmpty }}
                    </div>
                  </div>
                </div>
                
                <!-- Second Column: MOA -->
                <div class="pg-parameters-list-item__column">
                  <div class="pg-parameters-list-item__content">
                    <div class="pg-parameters-list-item__label">{{ parametersControls.studyMoa.title }}</div>
                    <div class="pg-parameters-list-item__value" [class.pg-empty-state]="!activeTrial.parameters.studyMoa">
                      {{ activeTrial.parameters.studyMoa | dashIfEmpty }}
                    </div>
                  </div>
                </div>
              </div>
            </li>
              </ul>
            </div>
          </div>

          <!-- Tailwind Utility-based Layout -->
          <div class="pg-card pg-card--padding-md">
            <div class="pg-card__header">
              <div class="pg-card__title">Trial Parameters (Tailwind Utilities)</div>
              <p class="pg-card__description">Review your trial parameters - Tailwind utility-based layout for comparison.</p>
            </div>
            <div class="pg-card__content">
              <div class="flex flex-col gap-4 w-full">
                
                <!-- Section 1: Trial Number and Title -->
                <div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-6">
                  <!-- Trial Number -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.studyNumber.title }}
                    </label>
                    <div class="pg-trial-number" [class.pg-empty-state]="!activeTrial.parameters.studyNumber">
                      {{ formattedStudyNumber }}
                    </div>
                    @if (activeTrial.parameters.ctmsTrial) {
                      <p-button
                        [label]="parametersControls.ctmsTrial.title"
                        [text]="true"
                        [icon]="'pi pi-angle-right'"
                        iconPos="right"
                        size="small"
                        class="mt-2 text-sm text-secondary hover:text-blue-600"
                        (onClick)="onCtmsTrialClick()">
                      </p-button>
                    }
                  </div>
                  
                  <!-- Title -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.studyName.title }}
                    </label>
                    <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.studyName">
                      {{ activeTrial.parameters.studyName | dashIfEmpty }}
                    </div>
                  </div>
                </div>

                <!-- Section 2: Phase and Milestone -->
                <div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-6">
                  <!-- Phase -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.studyPhase.title }}
                    </label>
                    @if (activeTrial.parameters.studyPhase) {
                      <p-tag class="pg-parameters-list-item__phase-tag">
                        <div class="pg-parameters-list-item__phase-content">
                          <span class="pg-parameters-list-item__phase-text">
                            {{ activeTrial.parameters.studyPhase }}
                          </span>
                        </div>
                      </p-tag>
                    } @else {
                      <span class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.studyPhase">
                        {{ activeTrial.parameters.studyPhase | dashIfEmpty }}
                      </span>
                    }
                  </div>
                  
                  <!-- Milestone -->
                  <div class="flex flex-col gap-2">
                    <div class="pg-parameters-list-item__milestone-container">
                      <div class="pg-parameters-list-item__milestone">
                        <div class="pg-parameters-list-item__milestone-icon-wrapper">
                          <i class="pi pi-check-circle pg-parameters-list-item__milestone-icon"></i>
                        </div>
                        <div class="pg-parameters-list-item__milestone-content">
                          <label class="block font-medium text-base text-text-primary">
                            {{ parametersControls.milestone.title }}
                          </label>
                          <p class="text-base text-secondary m-0" [class.pg-empty-state]="!activeTrial.parameters.milestone">
                            {{ activeTrial.parameters.milestone | dashIfEmpty }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Divider -->
                <p-divider></p-divider>

                <!-- Section 3: Therapeutic Area and HPC Biberach -->
                <div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-6">
                  <!-- Therapeutic Area -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.therapeuticArea.title }}
                    </label>
                    <p class="text-base text-secondary m-0" [class.pg-empty-state]="activeTrial.parameters.therapeuticArea === 'Others' ? !activeTrial.parameters.others : !activeTrial.parameters.therapeuticArea">
                      {{
                        activeTrial.parameters.therapeuticArea === 'Others'
                          ? (activeTrial.parameters.others | dashIfEmpty)
                          : (activeTrial.parameters.therapeuticArea | dashIfEmpty)
                      }}
                    </p>
                  </div>
                  
                  <!-- HPC Biberach -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.hpcBiberach.title }}
                    </label>
                    <div class="text-base text-secondary">
                      {{
                        activeTrial.parameters.hpcBiberach === 'yes'
                          ? 'Yes, conducted at HPC Biberach'
                          : 'No, not conducted at HPC Biberach'
                      }}
                    </div>
                  </div>
                </div>

                <!-- Divider -->
                <p-divider></p-divider>

                <!-- Section 4: Indication (Full Width) -->
                <div class="flex flex-col gap-2">
                  <label class="block font-medium text-base text-text-primary">
                    {{ parametersControls.indication.title }}
                  </label>
                  <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.indication">
                    {{ activeTrial.parameters.indication | dashIfEmpty }}
                  </div>
                </div>

                <!-- Section 5: BI Compound and MOA -->
                <div class="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 md:gap-6">
                  <!-- BI Compound -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.biCompound.title }}
                    </label>
                    <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.biCompound">
                      {{ activeTrial.parameters.biCompound | dashIfEmpty }}
                    </div>
                  </div>
                  
                  <!-- MOA -->
                  <div class="flex flex-col gap-2">
                    <label class="block font-medium text-base text-text-primary">
                      {{ parametersControls.studyMoa.title }}
                    </label>
                    <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.studyMoa">
                      {{ activeTrial.parameters.studyMoa | dashIfEmpty }}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <aside class="pg-parameters-view-aside">
          <!-- Aside content can be added here in the future -->
        </aside>
      </div>
    }
  `,
  styleUrls: ['./parameters-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParametersViewComponent {
  /**
   * Parameters controls token for field titles
   */
  parametersControls = inject(parametersControlsToken);

  /**
   * Active trial data to display
   */
  @Input() activeTrial?: Trial | null;

  /**
   * Gets the formatted study number
   */
  get formattedStudyNumber(): string {
    if (!this.activeTrial?.parameters?.studyNumber) {
      return '—';
    }
    return formatStudyNumber(this.activeTrial.parameters.studyNumber);
  }

  /**
   * Handles CTMS trial link click
   */
  onCtmsTrialClick(): void {
    // TODO: Implement CTMS trial navigation
    console.log('CTMS Trial clicked');
  }
}
