/**
 * Autofill State Type
 * 
 * Represents the state of autofill functionality for form fields.
 * Each key corresponds to a field name, and the boolean value indicates
 * whether autofill is enabled for that field.
 * 
 * @example
 * ```typescript
 * const autofillState: AutofillState = {
 *   'trialName': true,
 *   'description': false,
 *   'phase': true
 * };
 * ```
 * 
 * @since 1.0.0
 */
export type AutofillState = { [key: string]: boolean };

/**
 * Trial Autofill Change Interface
 * 
 * Represents a single change made through autofill functionality.
 * Contains the value that was filled and the timestamp when it occurred.
 * 
 * @interface TrialAutofillChange
 * @property {string | null} date - ISO string timestamp of when the change occurred
 * @property {string} value - The value that was autofilled
 * 
 * @example
 * ```typescript
 * const change: TrialAutofillChange = {
 *   date: '2024-01-15T10:30:00.000Z',
 *   value: 'Phase II Clinical Trial'
 * };
 * ```
 * 
 * @since 1.0.0
 */
export interface TrialAutofillChange {
  /** ISO string timestamp of when the change occurred */
  date: string | null;
  /** The value that was autofilled */
  value: string;
}

/**
 * Trial Autofill Changes Type
 * 
 * Represents a collection of autofill changes organized by field name.
 * Each field can have multiple changes tracked over time.
 * 
 * @example
 * ```typescript
 * const changes: TrialAutofillChanges = {
 *   'trialName': [
 *     { date: '2024-01-15T10:30:00.000Z', value: 'Original Name' },
 *     { date: '2024-01-15T11:00:00.000Z', value: 'Updated Name' }
 *   ],
 *   'phase': [
 *     { date: '2024-01-15T10:30:00.000Z', value: 'Phase II' }
 *   ]
 * };
 * ```
 * 
 * @since 1.0.0
 */
export type TrialAutofillChanges = { [key: string]: TrialAutofillChange[] };
