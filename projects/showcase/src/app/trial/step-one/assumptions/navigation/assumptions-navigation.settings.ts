/**
 * Page related tokens and constants for assumptions navigation
 * @fileoverview Contains all navigation constants, tokens, and providers for the assumptions navigation system
 */
import {
  AssumptionsScenarioPage,
  CohortsSection,
  ComplexitySection,
  ContactsSection, EvidenceSection, ImpactAssessmentSection,
  NewScenarioSection, NewTrialSection, OperationalSection, ReferenceSection,
  ScenarioParametersSection,
  ScenariosOverviewSection, ScientificSection, TimeFrameworkSection, TrialAssumptionsPage,
  TrialParameters,
  TrialSection
} from '@assumptions/assumptions';
import {InjectionToken} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {
  AssumptionsBaseNavigationItem, NewTrialNavigationItem,
  TrialAssumptionsNavigationItem
} from '@assumptions/navigation/assumptions-navigation';

/** Overview section constant for scenarios navigation */
export const overview: ScenariosOverviewSection = 'overview';
/** Injection token for overview section */
export const overviewSectionToken = new InjectionToken<ScenariosOverviewSection>('overview section');

/** New scenario section constant */
export const newScenario: NewScenarioSection = 'new-scenario';
/** Injection token for new scenario section */
export const newScenarioSectionToken = new InjectionToken<NewScenarioSection>('new scenario section');

/** Details section constant for trial navigation */
export const details: TrialSection = 'details';
/** Injection token for details section */
export const trialSectionToken = new InjectionToken<TrialSection>('details section');

export const trialParameters: TrialParameters = 'parameters';
export const trialParametersSectionToken = new InjectionToken<TrialParameters>('parameters section');

export const scenarioParameters: ScenarioParametersSection = 'scenario';
export const scenarioParametersSectionToken = new InjectionToken<ScenarioParametersSection>(
  'Scenario Parameters Section'
);

export const contacts: ContactsSection = 'contacts';
export const contactsSectionToken = new InjectionToken<ContactsSection>('contacts section');

export const timeFramework: TimeFrameworkSection = 'planning';
export const timeFrameworkSectionToken = new InjectionToken<TimeFrameworkSection>('time framework section');

export const evidence: EvidenceSection = 'evidence';
export const evidenceSectionToken = new InjectionToken<EvidenceSection>('evidence section');

export const reference: ReferenceSection = 'reference';
export const referenceSectionToken = new InjectionToken<ReferenceSection>('reference section');

export const complexity: ComplexitySection = 'complexity';
export const complexitySectionToken = new InjectionToken<ComplexitySection>('complexity section');

/** Scientific section constant */
export const scientific: ScientificSection = 'scientific';
/** Injection token for scientific section */
export const scientificSectionToken = new InjectionToken<ScientificSection>('scientific section');

/** Operational section constant */
export const operational: OperationalSection = 'operational';
/** Injection token for operational section */
export const operationalSectionToken = new InjectionToken<OperationalSection>('operational section');

/** Cohorts section constant */
export const cohorts: CohortsSection = 'cohorts';
/** Injection token for cohorts section */
export const cohortsSectionToken = new InjectionToken<CohortsSection>('cohorts section');

/** Impact assessment section constant */
export const impact: ImpactAssessmentSection = 'impact';
/** Injection token for impact assessment section */
export const impactSectionToken = new InjectionToken<ImpactAssessmentSection>('impact assessment section');

export const newTrial: NewTrialSection = 'new-trial';
export const newTrialSectionToken = new InjectionToken<NewTrialSection>('new-trial section');

/** Trial sections for assumptions navigation */
export const assumptionsTrialSections: TrialAssumptionsPage[] = [
  trialParameters,
  contacts,
  timeFramework,
  evidence,
  reference,
  complexity,
  scientific,
  operational,
  cohorts,
  impact,
];

/** Injection token for trial sections */
export const assumptionsTrialSectionsToken = new InjectionToken<TrialAssumptionsPage[]>('trial sections');

export const assumptionsScenarioSections: AssumptionsScenarioPage[] = [
  scenarioParameters,
  contacts,
  timeFramework,
  evidence,
  reference,
  complexity,
  scientific,
  operational,
  cohorts,
  impact,
];

export const assumptionsScenarioSectionsToken = new InjectionToken<AssumptionsScenarioPage[]>('scenario sections');

export const assumptionsEditableSections: TrialAssumptionsPage | AssumptionsScenarioPage[] = [
  trialParameters,
  scenarioParameters,
  contacts,
  timeFramework,
  evidence,
  reference,
  complexity,
  scientific,
  operational,
  impact,
];

export const assumptionsEditableSectionsToken = new InjectionToken<TrialAssumptionsPage | AssumptionsScenarioPage[]>(
  'editable sections'
);

/**
 * Navigation related tokens (typed map for safe dot-access)
 */
type AssumptionsKey =
  | typeof details
  | typeof trialParameters
  | typeof scenarioParameters
  | typeof contacts
  | typeof timeFramework
  | typeof evidence
  | typeof reference
  | typeof complexity
  | typeof scientific
  | typeof operational
  | typeof cohorts
  | typeof impact;

export const baseAssumptionsItems = {
  details: 'Trial',
  parameters: 'Parameters',
  scenario: 'Scenario Parameters',
  contacts: 'Contacts',
  planning: 'Time Framework',
  evidence: 'Country Requirements',
  reference: 'Trial Reference',
  complexity: 'Complexity',
  scientific: 'Scientific',
  operational: 'Operational',
  cohorts: 'Cohorts',
  impact: 'Impact Assessment',
} satisfies Record<AssumptionsKey, string>;

export const sectionOptions: SelectItem[] = [
  { label: baseAssumptionsItems.details, value: details },
  { label: baseAssumptionsItems.contacts, value: contacts },
  { label: baseAssumptionsItems.planning, value: timeFramework },
  { label: baseAssumptionsItems.evidence, value: evidence },
  { label: baseAssumptionsItems.reference, value: reference },
  { label: baseAssumptionsItems.complexity, value: complexity },
  { label: baseAssumptionsItems.scientific, value: scientific },
  { label: baseAssumptionsItems.operational, value: operational },
  { label: baseAssumptionsItems.impact, value: impact },
];

export const baseAssumptionsItemsToken = new InjectionToken<AssumptionsBaseNavigationItem[]>(
  'Base Assumptions Items Sections'
);

const detailItem = {
  slug: details,
  title: baseAssumptionsItems.details,
};

export const trialItems: TrialAssumptionsNavigationItem[] = [detailItem];

export const trialItemsToken = new InjectionToken<TrialAssumptionsNavigationItem[]>('Trial Items Sections');

/** New trial navigation item */
const newTrialItem = {
  slug: newTrial,
  title: 'New Trial',
};

export const newTrialItems: NewTrialNavigationItem[] = [newTrialItem];

export const newTrialItemsToken = new InjectionToken<NewTrialNavigationItem[]>('New Trial Items Sections');

/** Base assumptions navigation items for all sections */
export const baseAssumptionsNavItems: AssumptionsBaseNavigationItem[] = [
  {
    slug: contacts,
    title: baseAssumptionsItems.contacts,
  },
  {
    slug: timeFramework,
    title: baseAssumptionsItems.planning,
  },
  {
    slug: evidence,
    title: baseAssumptionsItems.evidence,
  },
  {
    slug: reference,
    title: baseAssumptionsItems.reference,
  },
  {
    slug: complexity,
    title: baseAssumptionsItems.complexity,
  },
  {
    slug: scientific,
    title: baseAssumptionsItems.scientific,
  },
  {
    slug: operational,
    title: baseAssumptionsItems.operational,
  },
  {
    slug: cohorts,
    title: baseAssumptionsItems.cohorts,
  },
  {
    slug: impact,
    title: baseAssumptionsItems.impact,
  },
];
/** Injection token for base assumptions navigation items */
export const baseAssumptionsNavItemsToken = new InjectionToken<AssumptionsBaseNavigationItem[]>(
  'Nav Items for Trial Assumptions Sections'
);

/** Scenario sections navigation items (reuses baseAssumptionsNavItems to avoid duplication) */
export const scenarioSections: AssumptionsBaseNavigationItem[] = baseAssumptionsNavItems;
/** Injection token for scenario sections */
export const scenarioSectionsToken = new InjectionToken<AssumptionsBaseNavigationItem[]>('Scenario Sections');

/** Navigation providers array for dependency injection */
export const navProviders = [
  {
    provide: scenarioSectionsToken,
    useValue: scenarioSections,
  },
  {
    provide: baseAssumptionsNavItemsToken,
    useValue: baseAssumptionsNavItems,
  },
  {
    provide: newTrialItemsToken,
    useValue: newTrialItems,
  },
  {
    provide: trialSectionToken,
    useValue: details,
  },
  {
    provide: trialParametersSectionToken,
    useValue: trialParameters,
  },
  {
    provide: scenarioParametersSectionToken,
    useValue: scenarioParameters,
  },
  {
    provide: contactsSectionToken,
    useValue: contacts,
  },
  {
    provide: timeFrameworkSectionToken,
    useValue: timeFramework,
  },
  {
    provide: evidenceSectionToken,
    useValue: evidence,
  },
  {
    provide: referenceSectionToken,
    useValue: reference,
  },
  {
    provide: complexitySectionToken,
    useValue: complexity,
  },
  {
    provide: scientificSectionToken,
    useValue: scientific,
  },
  {
    provide: operationalSectionToken,
    useValue: operational,
  },
  {
    provide: cohortsSectionToken,
    useValue: cohorts,
  },
  {
    provide: impactSectionToken,
    useValue: impact,
  },
  {
    provide: newTrialSectionToken,
    useValue: newTrial,
  },
  {
    provide: baseAssumptionsItemsToken,
    useValue: baseAssumptionsItems,
  },
  {
    provide: trialItemsToken,
    useValue: trialItems,
  },
  {
    provide: assumptionsScenarioSectionsToken,
    useValue: assumptionsScenarioSections,
  },
  {
    provide: assumptionsEditableSectionsToken,
    useValue: assumptionsEditableSections,
  },
  {
    provide: assumptionsTrialSectionsToken,
    useValue: assumptionsTrialSections,
  },
  {
    provide: overviewSectionToken,
    useValue: overview,
  },
  {
    provide: newScenarioSectionToken,
    useValue: newScenario,
  },
];
