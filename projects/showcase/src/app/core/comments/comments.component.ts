import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { RippleModule } from 'primeng/ripple';

/**
 * Comments Component
 * 
 * A reusable component for adding comments, tags, and quick actions.
 * Provides a consistent interface for user input and utility functions.
 * 
 * @example
 * ```html
 * <kit-comments 
 *   [comments]="trialComments"
 *   [tags]="trialTags"
 *   (commentsChange)="onCommentsChange($event)"
 *   (tagsChange)="onTagsChange($event)"
 *   (actionClick)="onActionClick($event)">
 * </kit-comments>
 * ```
 * 
 * @since 1.0.0
 * @author Angular Team
 */
@Component({
  selector: 'kit-comments',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule, RippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pg-card pg-card--padding-md">
      <div class="pg-card__header">
        <div class="pg-card__title">Comments & Utilities</div>
        <div class="pg-card__description">
          Add notes, tags, and quick actions
        </div>
      </div>
      <div class="pg-card__content">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="comments" class="pg-form-label">Comments</label>
            <textarea 
              id="comments"
              pTextarea 
              [(ngModel)]="comments"
              (ngModelChange)="onCommentsChange($event)"
              placeholder="Add comments or notes about this trial..."
              rows="4">
            </textarea>
          </div>
          
          <div class="flex flex-col gap-2">
            <label for="tags" class="pg-form-label">Tags</label>
            <input 
              id="tags"
              type="text" 
              pInputText 
              [(ngModel)]="tags"
              (ngModelChange)="onTagsChange($event)"
              placeholder="Add tags separated by commas">
          </div>
          
          <div class="flex flex-col gap-2">
            <h5 class="font-medium text-sm text-gray-700">Quick Actions</h5>
            <div class="flex flex-col gap-2">
              <p-button 
                label="Validate Form" 
                severity="info" 
                size="small"
                [outlined]="true"
                (onClick)="onActionClick('validate')"
                pRipple>
              </p-button>
              <p-button 
                label="Export Data" 
                severity="secondary" 
                size="small"
                [outlined]="true"
                (onClick)="onActionClick('export')"
                pRipple>
              </p-button>
              <p-button 
                label="Save Template" 
                severity="help" 
                size="small"
                [outlined]="true"
                (onClick)="onActionClick('save-template')"
                pRipple>
              </p-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CommentsComponent {
  /** Current comments text */
  @Input() comments: string = '';
  
  /** Current tags text */
  @Input() tags: string = '';
  
  /** Event emitted when comments change */
  @Output() commentsChange = new EventEmitter<string>();
  
  /** Event emitted when tags change */
  @Output() tagsChange = new EventEmitter<string>();
  
  /** Event emitted when a quick action is clicked */
  @Output() actionClick = new EventEmitter<string>();

  /**
   * Handle comments change
   * @param value - The new comments value
   */
  onCommentsChange(value: string): void {
    this.comments = value;
    this.commentsChange.emit(value);
  }

  /**
   * Handle tags change
   * @param value - The new tags value
   */
  onTagsChange(value: string): void {
    this.tags = value;
    this.tagsChange.emit(value);
  }

  /**
   * Handle quick action click
   * @param action - The action that was clicked
   */
  onActionClick(action: string): void {
    this.actionClick.emit(action);
    console.log('Quick action clicked:', action);
  }
}
