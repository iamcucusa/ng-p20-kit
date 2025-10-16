/**
 * @fileoverview Status Display Types
 * Type definitions for status display functionality
 */


/**
 * Status severity levels for PrimeNG tags
 */
export type StatusSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

/**
 * Help link configuration for status displays
 */
export interface StatusHelpLink {
  /** Route path for the help link */
  route: string[];
  /** Tooltip text for the help icon */
  tooltip: string;
  /** Permission required to show the help link */
  permission?: string;
}

/**
 * Status display configuration
 */
export interface StatusConfig {
  /** Display value for the status tag */
  value: string;
  /** PrimeNG severity level */
  severity: StatusSeverity;
  /** Optional help link configuration */
  helpLink?: StatusHelpLink;
  /** Custom CSS classes for the status container */
  customClasses?: string;
}
