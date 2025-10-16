/**
 * Step Heading Types
 * Type definitions for step heading component actions and configurations
 */

/**
 * Step Heading Action Interface
 * Defines the structure for step heading action buttons
 */
export interface StepHeadingAction {
  /** Unique identifier for the action */
  id: string;
  /** Display label for the action button */
  label: string;
  /** Button variant (outlined, text) */
  variant?: 'outlined' | 'text';
  /** Button severity (success, info, danger) */
  severity?: 'success' | 'info' | 'danger';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Icon class for the button */
  icon?: string;
  /** Whether the button is loading */
  loading?: boolean;
}

/**
 * Common step heading actions
 * Predefined action configurations for common use cases
 */
export const stepHeadingActions = {
  save: {
    id: 'save',
    label: 'Save',
    variant: 'outlined' as const,
    severity: 'success' as const,
    icon: 'pi pi-save'
  },
  cancel: {
    id: 'cancel',
    label: 'Cancel',
    variant: 'outlined' as const,
    severity: 'info' as const,
    icon: 'pi pi-times'
  },
  previous: {
    id: 'previous',
    label: 'Previous',
    variant: 'outlined' as const,
    severity: 'info' as const,
    icon: 'pi pi-arrow-left'
  }
} as const;
