import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import type { Trial } from '@trial/trial';
import { parametersControlsToken } from '@assumptions/sections/parameters.settings';
import { DashIfEmptyPipe } from '@core/dash-if-empty.pipe';
import { formatStudyNumber } from '@trial/study-number.utils';

/**
 * Parameters View Component - Tailwind Version
 * 
 * Displays trial parameters using Tailwind utility classes for layout
 * This is a comparison version to evaluate layout results
 */
@Component({
  selector: 'kit-parameters-view-tailwind',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    TagModule,
    ButtonModule,
    DashIfEmptyPipe
  ],
  template: `
    @if (!activeTrial) {
      <div class="text-center py-16 px-8 bg-surface-card border-2 border-dashed border-surface-border rounded-lg mt-4">
        <div class="text-5xl mb-4 opacity-50">📋</div>
        <h5 class="text-lg font-semibold text-primary mb-2">No Trial Data Available</h5>
        <p class="text-secondary">
          Trial parameters will be displayed here once a trial is selected.
        </p>
      </div>
    } @else {
      <div class="pg-card pg-card--padding-md">
        <div class="pg-card__header">
          <div class="pg-card__title">Trial Parameters</div>
          <p class="pg-card__description">Review your trial parameters.</p>
        </div>
        <div class="pg-card__content">
          <div class="flex flex-col gap-6 w-full">
            
            <!-- Section 1: Trial Number and Title -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-6">
              <!-- Trial Number -->
              <div class="flex-auto sm:flex-none">
                <label class="block font-medium mb-2 text-base text-text-primary">
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
              <div class="flex-1">
                <label class="block font-medium mb-2 text-base text-text-primary">
                  {{ parametersControls.studyName.title }}
                </label>
                <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.studyName">
                  {{ activeTrial.parameters.studyName | dashIfEmpty }}
                </div>
              </div>
            </div>

            <!-- Section 2: Phase and Milestone -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-6">
              <!-- Phase -->
              <div class="flex-auto sm:flex-none">
                <label class="block font-medium mb-2 text-base text-text-primary">
                  {{ parametersControls.studyPhase.title }}
                </label>
                @if (activeTrial.parameters.studyPhase) {
                  <p-tag
                    [value]="activeTrial.parameters.studyPhase"
                    severity="info"
                    class="pg-parameters-list-item__phase-tag">
                  </p-tag>
                } @else {
                  <span class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.studyPhase">
                    {{ activeTrial.parameters.studyPhase | dashIfEmpty }}
                  </span>
                }
              </div>
              
              <!-- Milestone -->
              <div class="flex-1">
                <div class="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-fit">
                  <div class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full flex-shrink-0">
                    <i class="pi pi-check-circle text-white text-2xl"></i>
                  </div>
                  <div class="flex flex-col gap-2 min-w-0">
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

            <!-- Divider -->
            <p-divider></p-divider>

            <!-- Section 3: Therapeutic Area and HPC Biberach -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-6">
              <!-- Therapeutic Area -->
              <div class="flex-[2]">
                <label class="block font-medium mb-2 text-base text-text-primary">
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
              <div class="flex-1">
                <label class="block font-medium mb-2 text-base text-text-primary">
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
            <div class="flex-auto">
              <label class="block font-medium mb-2 text-base text-text-primary">
                {{ parametersControls.indication.title }}
              </label>
              <div class="text-base text-secondary max-w-2xl" [class.pg-empty-state]="!activeTrial.parameters.indication">
                {{ activeTrial.parameters.indication | dashIfEmpty }}
              </div>
            </div>

            <!-- Section 5: BI Compound and MOA -->
            <div class="flex flex-col sm:flex-row sm:items-start gap-6">
              <!-- BI Compound -->
              <div class="flex-1">
                <label class="block font-medium mb-2 text-base text-text-primary">
                  {{ parametersControls.biCompound.title }}
                </label>
                <div class="text-base text-secondary" [class.pg-empty-state]="!activeTrial.parameters.biCompound">
                  {{ activeTrial.parameters.biCompound | dashIfEmpty }}
                </div>
              </div>
              
              <!-- MOA -->
              <div class="flex-1">
                <label class="block font-medium mb-2 text-base text-text-primary">
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
    }
  `,
  styleUrls: ['./parameters-view-tailwind.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParametersViewTailwindComponent {
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

