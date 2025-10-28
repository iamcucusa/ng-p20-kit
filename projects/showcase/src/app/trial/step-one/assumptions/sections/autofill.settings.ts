import {TrialAutofillChange, TrialAutofillChanges} from '@assumptions/sections/autofill';

/**
 * Autofill Settings and Utilities
 * 
 * Provides utility functions for managing autofill functionality in forms.
 * Includes change tracking, validation, and state management utilities.
 * 
 * @fileoverview Autofill management utilities for clinical trial forms
 * @since 1.0.0
 */

/**
 * Checks if a field value has changed from its previous autofilled value
 * 
 * Compares the current field value with the stored autofill value,
 * normalizing whitespace and trimming for accurate comparison.
 * 
 * @param {string} field - The field name to check
 * @param {string} value - The current field value
 * @returns {boolean} True if the value has changed, false otherwise
 * 
 * @example
 * ```typescript
 * const hasChanged = autoFillChangeCheck('trialName', 'New Trial Name');
 * if (hasChanged) {
 *   console.log('Field value has been modified');
 * }
 * ```
 * 
 * @since 1.0.0
 */
export const autoFillChangeCheck = (field: string, value: string): boolean => {
  return field?.toString().trim().replace(/\s/g, '') !== value?.toString().trim().replace(/\s/g, '');
};

/**
 * Updates the autofill changes tracking with a new field value
 * 
 * Creates or updates the change history for a specific field, maintaining
 * an immutable record of all autofill changes with timestamps.
 * 
 * @template T - The type of the field key
 * @param {T} key - The field key to update
 * @param {string | null | undefined} newValue - The new value to track
 * @param {TrialAutofillChanges | null} autofillChanges - Current changes object
 * @returns {TrialAutofillChanges | null} Updated changes object or null if no changes
 * 
 * @example
 * ```typescript
 * const updatedChanges = updateFillInChanges(
 *   'trialName',
 *   'Updated Trial Name',
 *   existingChanges
 * );
 * ```
 * 
 * @since 1.0.0
 */
export const updateFillInChanges = <T>(
  key: T,
  newValue: string | null | undefined,
  autofillChanges: TrialAutofillChanges | null
): TrialAutofillChanges | null => {
  let changes = { ...autofillChanges };

  if (newValue) {
    const change: TrialAutofillChange = {
      value: newValue.trim(),
      date: new Date().toString(),
    };

    const newKey = key as string;

    if (changes && changes[newKey]) {
      const values: TrialAutofillChange[] = changes[newKey];
      changes[newKey] = [...values, change];
    }

    if (!changes) {
      changes = {
        [newKey]: [change],
      };
    }

    if (changes && !changes[newKey]) {
      changes[newKey] = [change];
    }
  }

  return changes;
};
