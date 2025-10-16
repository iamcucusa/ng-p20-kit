import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import type { TrialStatus } from '@trial/trial.d';
import { getStatusConfig } from './status.config';
import type { StatusConfig } from './status.d';

/**
 * Status Display Component
 * 
 * A reusable component for displaying trial status with consistent styling,
 * help links, and permission-based visibility.
 * 
 * Features:
 * - Automatic status configuration lookup
 * - Permission-based help link visibility
 * - Consistent PrimeNG 20 styling
 * - Theme-integrated design tokens
 * - Type-safe status handling
 * 
 * @example
 * ```html
 * <kit-status-display 
 *   [status]="trial.status"
 *   [showHelp]="true"
 *   [permissions]="userPermissions">
 * </kit-status-display>
 * ```
 */
@Component({
  selector: 'kit-status-display',
  template: `
    <div class="flex items-center" role="group" aria-label="Trial Status Information">
      <p-tag 
        [value]="statusConfig.value" 
        [severity]="statusConfig.severity"
        [class]="tagClasses"
        [attr.aria-label]="'Trial Status: ' + statusConfig.value">
      </p-tag>
      
      @if (shouldShowHelpLink) {
        <a
          pTooltip
          [pTooltip]="statusConfig.helpLink!.tooltip"
          tooltipPosition="top"
          [routerLink]="statusConfig.helpLink!.route"
          target="_blank"
          [class]="helpLinkClasses"
          pRipple
          [attr.aria-label]="'Get help about ' + statusConfig.value + ' status'"
          role="button">
          <i class="text-lg pi pi-question-circle" aria-hidden="true"></i>
          <span class="sr-only">Help information for {{ statusConfig.value }} status</span>
        </a>
      }
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule, TagModule, TooltipModule, RippleModule]
})
export class StatusDisplayComponent implements OnInit {
  @Input({ required: true }) status!: TrialStatus;
  @Input() showHelp: boolean = true;
  @Input() permissions: string[] = [];
  @Input() customClasses: string = '';

  statusConfig: StatusConfig = {} as StatusConfig;

  /**
   * Gets the CSS classes for the status tag
   */
  get tagClasses(): string {
    return `${this.statusConfig.customClasses || ''}`.trim();
  }

  /**
   * Gets the CSS classes for the help link
   */
  get helpLinkClasses(): string {
    return 'text-gray-500 font-medium no-underline cursor-pointer ml-2';
  }

  /**
   * Checks if the help link should be displayed based on permissions
   */
  get shouldShowHelpLink(): boolean {
    if (!this.showHelp || !this.statusConfig.helpLink) {
      return false;
    }

    const requiredPermission = this.statusConfig.helpLink.permission;
    if (!requiredPermission) {
      return true;
    }

    return this.permissions.includes(requiredPermission);
  }

  ngOnInit(): void {
    this.statusConfig = getStatusConfig(this.status);
  }
}
