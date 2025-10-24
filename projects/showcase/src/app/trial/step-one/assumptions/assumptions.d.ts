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
