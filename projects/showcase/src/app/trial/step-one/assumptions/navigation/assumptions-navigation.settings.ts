/**
* Page related tokens
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

export const overview: ScenariosOverviewSection = 'overview';
export const overviewSectionToken = new InjectionToken<ScenariosOverviewSection>('overview section');

export const newScenario: NewScenarioSection = 'new-scenario';
export const newScenarioSectionToken = new InjectionToken<NewScenarioSection>('new scenario section');

export const details: TrialSection = 'details';
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

export const scientific: ScientificSection = 'scientific';
export const scientificSectionToken = new InjectionToken<ScientificSection>('reference section');

export const operational: OperationalSection = 'operational';
export const operationalSectionToken = new InjectionToken<OperationalSection>('operational section');

export const cohorts: CohortsSection = 'cohorts';
export const cohortsSectionToken = new InjectionToken<CohortsSection>('cohorts section');

export const impact: ImpactAssessmentSection = 'impact';
export const impactSectionToken = new InjectionToken<ImpactAssessmentSection>('cohorts section');

export const newTrial: NewTrialSection = 'new-trial';
export const newTrialSectionToken = new InjectionToken<NewTrialSection>('new-trial section');

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

export const assumptionsTrialSectionsToken = new InjectionToken<AssumptionsScenarioPage[]>('trial sections');

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

const newTrialItemsMap: { [key: string]: string } = {};

newTrialItemsMap[`${newTrial}`] = 'New Trial';


const newTrialItem = {
  slug: newTrial,
  title: 'New Trial',
};

export const newTrialItems: NewTrialNavigationItem[] = [newTrialItem];

export const newTrialItemsToken = new InjectionToken<NewTrialNavigationItem[]>('New Trial Items Sections');

export const scenarioSections: AssumptionsBaseNavigationItem[] = [
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
export const scenarioSectionsToken = new InjectionToken<AssumptionsBaseNavigationItem[]>('Scenario Sections');

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
export const baseAssumptionsNavItemsToken = new InjectionToken<AssumptionsBaseNavigationItem[]>(
  'Nav Items for Trial Assumptions Sections'
);

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
