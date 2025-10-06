import { Component, Input } from '@angular/core';

/**
 * Angular 17 to 20 Button Migration Example
 * 
 * This component demonstrates the migration from Angular 17 to Angular 20
 * showing the key changes: standalone components, new imports, and modern patterns.
 * 
 * @example
 * ```typescript
 * // Before (Angular 17)
 * @Component({
 *   selector: 'app-button',
 *   template: '<button [class]="getClasses()">{{ label }}</button>'
 * })
 * export class ButtonComponent {
 *   @Input() label: string = 'Button';
 *   @Input() variant: 'primary' | 'secondary' = 'primary';
 *   
 *   getClasses(): string {
 *     return `btn btn-${this.variant}`;
 *   }
 * }
 * 
 * // After (Angular 20)
 * @Component({
 *   selector: 'app-button',
 *   standalone: true,
 *   template: '<button [class]="getClasses()">{{ label }}</button>'
 * })
 * export class ButtonComponent {
 *   @Input() label: string = 'Button';
 *   @Input() variant: 'primary' | 'secondary' = 'primary';
 *   
 *   getClasses(): string {
 *     return `btn btn-${this.variant}`;
 *   }
 * }
 * ```
 */
@Component({
  selector: 'app-button-migration',
  standalone: true,
  template: `
    <button 
      [class]="getClasses()" 
      [attr.aria-label]="label"
      (click)="onClick.emit($event)">
      {{ label }}
    </button>
  `,
  styles: [`
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
  `]
})
export class ButtonMigrationComponent {
  /** Button text content */
  @Input() label: string = 'Button';
  
  /** Button style variant */
  @Input() variant: 'primary' | 'secondary' = 'primary';
  
  /** Button size */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  /** Click event handler */
  @Input() onClick: (event: Event) => void = () => {};

  /**
   * Generates CSS classes based on component properties
   * @returns Space-separated CSS class names
   */
  getClasses(): string {
    const sizeClass = this.size !== 'medium' ? `btn-${this.size}` : '';
    return `btn btn-${this.variant} ${sizeClass}`.trim();
  }
}
