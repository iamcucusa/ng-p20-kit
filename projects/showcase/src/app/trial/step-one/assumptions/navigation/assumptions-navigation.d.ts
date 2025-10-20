/**
 * Assumptions Navigation Types and Interfaces
 * @fileoverview Type definitions for assumptions navigation system including trial and scenario navigation items
 */

/** Level of assumptions navigation (Trial or Scenario) */
export type AssumptionsLevel = 'Trial' | 'Scenario';

/** Base navigation item interface with common properties */
export interface BaseNavigationItem {
  /** Display title for the navigation item */
  title: string;
  /** Whether the navigation item is disabled */
  disabled?: boolean;
}

/** Navigation item for new trial creation */
export interface NewTrialNavigationItem {
  /** Display title for the new trial item */
  title: string;
  /** Slug identifier for the trial page */
  slug: TrialPage;
  /** Whether the navigation item is disabled */
  disabled?: boolean;
}

/** Navigation item for assumptions sections */
export interface AssumptionsNavigationItem {
  /** Display title for the assumptions item */
  title: string;
  /** Slug identifier for the trial assumptions page */
  slug: TrialAssumptionsPage;
  /** Whether the navigation item is disabled */
  disabled?: boolean;
}

/** Navigation item for trial assumptions sections */
export interface TrialAssumptionsNavigationItem extends BaseNavigationItem {
  /** Slug identifier for the trial page */
  slug: TrialPage;
}

/** Navigation item for base assumptions sections */
export interface AssumptionsBaseNavigationItem extends BaseNavigationItem {
  /** Slug identifier for the trial assumptions section */
  slug: TrialAssumptionsSection;
}

/** Navigation item for assumptions scenarios */
export interface AssumptionsScenariosNavigationItem extends BaseNavigationItem {
  /** Slug identifier for scenarios page or numeric ID */
  slug: AssumptionsScenariosPage | number;
  /** Optional nested scenario navigation items */
  sections?: AssumptionsScenarioNavigationItem[];
  /** Order of the scenario item */
  order: number | null;
  /** Optional scenario ID */
  idScenario?: number;
}

/** Navigation item for assumptions scenario sections */
export interface AssumptionsScenarioNavigationItem extends BaseNavigationItem {
  /** Slug identifier for scenario page or numeric ID */
  slug: AssumptionsScenarioPage | number;
  /** Optional nested scenario navigation items */
  sections?: AssumptionsScenarioNavigationItem[];
}
