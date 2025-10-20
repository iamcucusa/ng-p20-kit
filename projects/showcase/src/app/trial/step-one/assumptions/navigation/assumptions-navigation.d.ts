/**
 * Scenarios Navigation related types and interfaces
 */
/**
 * Trian & Scenarios Navigation related types and interfaces
 */

export type AssumptionsLevel = 'Trial' | 'Scenario';

export interface BaseNavigationItem {
  title: string;
  disabled?: boolean;
}

export interface NewTrialNavigationItem {
  title: string;
  slug: TrialPage;
  disabled?: boolean;
}

export interface AssumptionsNavigationItem {
  title: string;
  slug: TrialAssumptionsPage;
  disabled?: boolean;
}

export interface TrialAssumptionsNavigationItem extends BaseNavigationItem {
  slug: TrialPage;
}

export interface AssumptionsBaseNavigationItem extends BaseNavigationItem {
  slug: TrialAssumptionsSection;
}

export interface AssumptionsScenariosNavigationItem extends BaseNavigationItem {
  slug: AssumptionsScenariosPage | number;
  sections?: AssumptionsScenarioNavigationItem[];
  order: number | null;
  idScenario?: number;
}

export interface AssumptionsScenarioNavigationItem extends BaseNavigationItem {
  slug: AssumptionsScenarioPage | number;
  sections?: AssumptionsScenarioNavigationItem[];
}
