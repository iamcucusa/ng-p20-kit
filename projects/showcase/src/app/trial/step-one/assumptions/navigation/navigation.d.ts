/**
 * Assumptions Navigation Types and Interfaces
 * @fileoverview Type definitions for assumptions navigation system including trial and scenario navigation items
 */

/**
 * Page related types and interfaces
 */

export type ScenarioParametersSection = 'scenario';
export type TrialSection = 'trial-section';
export type TrialParameters = 'parameters';
export type ContactsSection = 'contacts';
export type TimeFrameworkSection = 'planning';
export type EvidenceSection = 'evidence';
export type ReferenceSection = 'reference';
export type ComplexitySection = 'complexity';
export type ScientificSection = 'scientific';
export type OperationalSection = 'operational';
export type CohortsSection = 'cohorts';
export type ImpactAssessmentSection = 'impact';

export type TrialAssumptionsItem = 'trial-assumptions';
export type NewTrialSection = 'new-trial';
export type VersionSection = 'versions';
export type ScenariosOverviewSection = 'overview';
export type NewScenarioSection = 'new-scenario';

export type TrialAssumptionsSection =
  | ContactsSection
  | TimeFrameworkSection
  | EvidenceSection
  | ReferenceSection
  | ComplexitySection
  | ScientificSection
  | OperationalSection
  | CohortsSection
  | ImpactAssessmentSection
  | TrialAssumptionsItem;

export type TrialPage = NewTrialSection | TrialSection | VersionSection;

export type TrialAssumptionsPage = TrialSection | TrialParameters | TrialAssumptionsSection;

export type AssumptionsScenariosPage = NewScenarioSection | ScenariosOverviewSection;

export type AssumptionsScenariosPageItem = {
  [Property in keyof AssumptionsScenariosPage]: string;
};

export type AssumptionsScenarioPage = ScenarioParametersSection | TrialAssumptionsPage;

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
  /** Slug identifier for the trial page , empty string for default route */
  slug: TrialPage| ''; 
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

/**
 * Navigation related tokens (typed map for safe dot-access)
 * Union type of all assumption section constants
 */
export type AssumptionsKey =
  | TrialSection
  | TrialParameters
  | ScenarioParametersSection
  | ContactsSection
  | TimeFrameworkSection
  | EvidenceSection
  | ReferenceSection
  | ComplexitySection
  | ScientificSection
  | OperationalSection
  | CohortsSection
  | ImpactAssessmentSection;
