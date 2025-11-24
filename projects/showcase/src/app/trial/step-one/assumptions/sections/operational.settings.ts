import {
  AssumptionsOperationalControls,
  AssumptionsOperationalFieldsTitles,
  ColDefTrialOperational,
  GeneralSpeciality,
  InvestigatorGeneralSpeciality,
  InvestigatorGeneralSpecialityTitle,
  InvestigatorNeuroSpeciality,
  InvestigatorNeuroSpecialityTitle,
  InvestigatorNonClinicalSpeciality,
  InvestigatorNonClinicalSpecialityTitle,
  InvestigatorOncologySpeciality,
  InvestigatorOncologySpecialityTitle,
  InvestigatorPediatricSpeciality,
  InvestigatorPediatricSpecialityTitle,
  InvestigatorPsychiatrySpeciality,
  InvestigatorPsychiatrySpecialityTitle,
  InvestigatorSurgerySpeciality,
  InvestigatorSurgerySpecialityTitle,
  NeuroSpeciality,
  NonClinicalSpeciality,
  OncologySpeciality,
  PediatricSpeciality,
  PsychiatrySpeciality,
  SpecialityMap,
  SurgerySpeciality,
} from '@assumptions/sections/operational';
import { InjectionToken } from '@angular/core';

export const operationalFields: AssumptionsOperationalFieldsTitles = {
  averageCTLFTE: 'averageCTLFTE',
  averageCTMFTE: 'averageCTMFTE',
  averageCRAFTE: 'averageCRAFTE',
  averageSMLFTE: 'averageSMLFTE',
  patientVisits: 'patientVisits',
  patientCRAVisits: 'patientCRAVisits',
  siteEquipment: 'siteEquipment',
  trainingRequirements: 'trainingRequirements',
  investigatorSpecialities: 'investigatorSpecialities',
  otherSpecialities: 'otherSpecialities',
  otherSpecialitiesDescription: 'otherSpecialitiesDescription',
  centralLab: 'centralLab',
  centralLabDescription: 'centralLabDescription',
  otherVendors: 'otherVendors',
  otherVendorsDescription: 'otherVendorsDescription',
  centralServices: 'centralServices',
  centralServicesDescription: 'centralServicesDescription',
  additionalCosts: 'additionalCosts',
};
export const operationalControls: AssumptionsOperationalControls = {
  averageCTLFTE: {
    name: operationalFields.averageCTLFTE,
    export: true,
    title: 'Average CTL FTE',
    unit: '%',
    info: 'Percentage of time a Clinical Team Lead (CTL) will dedicate to this study (e.g., 5% or 100%).',
  },
  averageCTMFTE: {
    name: operationalFields.averageCTMFTE,
    export: true,
    title: 'Average CTM FTE',
    unit: '%',
    info: 'Percentage of time a Clinical Trial Manager (CTM) is assigned to this study (e.g., 5% or 100%).',
  },
  averageCRAFTE: {
    name: operationalFields.averageCRAFTE,
    export: true,
    title: 'Average CRA FTE',
    unit: '%',
    info: 'The average Full-Time Equivalent (FTE) for Clinical Research Associates (CRA) for this study (e.g., 5% or 100%).',
  },
  averageSMLFTE: {
    name: operationalFields.averageSMLFTE,
    export: true,
    title: 'Average SML FTE',
    unit: '%',
    info: 'Percentage of time a Study Medical Lead (SML) will spend on this study (e.g., 5% or 100%).',
  },
  patientVisits: {
    name: operationalFields.patientVisits,
    export: true,
    title: 'Subjects Visits',
    unit: '#',
    info: 'Projected number of visits required by subjects throughout the study period.',
  },
  patientCRAVisits: {
    name: operationalFields.patientCRAVisits,
    export: true,
    title: 'CRA Visits',
    unit: '#',
    info: 'Expected number of monitoring visits by Clinical Research Associates during the study.',
  },
  siteEquipment: {
    name: operationalFields.siteEquipment,
    export: true,
    title: 'Site Equipment',
  },
  trainingRequirements: {
    name: operationalFields.trainingRequirements,
    export: true,
    title: 'Training Requirements',
  },
  investigatorSpecialities: {
    name: operationalFields.investigatorSpecialities,
    export: true,
    title: 'Investigator Specialities',
  },
  otherSpecialities: {
    name: operationalFields.otherSpecialities,
    export: true,
    title: 'Other Specialities',
  },
  otherSpecialitiesDescription: {
    name: operationalFields.otherSpecialitiesDescription,
    export: true,
    title: 'Other Specialities Details',
  },
  centralLab: {
    name: operationalFields.centralLab,
    export: true,
    title: 'Central Lab Required?',
  },
  centralLabDescription: {
    name: operationalFields.centralLabDescription,
    export: true,
    title: 'Central Lab Details',
  },
  otherVendors: {
    name: operationalFields.otherVendors,
    export: true,
    title: 'Other Vendors Required?',
  },
  otherVendorsDescription: {
    name: operationalFields.otherVendorsDescription,
    export: true,
    title: 'Other Vendors Details',
  },
  centralServices: {
    name: operationalFields.centralServices,
    export: true,
    title: 'Other Service Providers Required?',
  },
  centralServicesDescription: {
    name: operationalFields.centralServicesDescription,
    export: true,
    title: 'Other Service Providers Details',
  },
  additionalCosts: {
    name: operationalFields.additionalCosts,
    export: true,
    title: 'Additional Cost Drivers',
  },
};
export const operationalControlsToken = new InjectionToken<AssumptionsOperationalControls>('Operational Page Form Fields');

export const operationalFormProviders = [
  {
    provide: operationalControlsToken,
    useValue: operationalControls,
  }
];
export const defTrialOperational: ColDefTrialOperational = {
  averageCTLFTE: undefined,
  averageCTMFTE: undefined,
  averageCRAFTE: undefined,
  averageSMLFTE: undefined,
  patientVisits: undefined,
  patientCRAVisits: undefined,
  investigatorSpecialities: undefined,
  otherSpecialities: undefined,
  otherSpecialitiesDescription: undefined,
  siteEquipment: undefined,
  trainingRequirements: undefined,
  centralLab: undefined,
  centralLabDescription: undefined,
  otherVendors: undefined,
  otherVendorsDescription: undefined,
  centralServices: undefined,
  centralServicesDescription: undefined,
  additionalCosts: undefined,
};
export const surgerySpeciality: InvestigatorSurgerySpeciality = 'SurgerySpeciality';
export const surgerySpecialityTypeToken = new InjectionToken<InvestigatorSurgerySpeciality>('SurgerySpeciality Type');
export const surgerySpecialityTitle: InvestigatorSurgerySpecialityTitle = 'Surgery';
export const surgerySpecialityTitleToken = new InjectionToken<InvestigatorSurgerySpecialityTitle>(
  'Surgery Speciality List Title',
);
export const surgerySpecialityList: { label: SurgerySpeciality }[] = [
  { label: 'Surgery - Cardiac' },
  { label: 'Surgery - Cardiothoracic Thoracic' },
  { label: 'Surgery - Colorectal' },
  { label: 'Surgery - General' },
  { label: 'Surgery - Neurologic (Neurosurgery)' },
  { label: 'Surgery - Oncology' },
  { label: 'Surgery - Orthopedic' },
  { label: 'Surgery - Plastic' },
  { label: 'Surgery - Podiatric' },
  { label: 'Surgery - Vascular' },
  { label: 'Surgery – Transplantation' },
  { label: 'Surgical Critical Care' },
];
export const surgerySpecialityToken = new InjectionToken<typeof surgerySpecialityList>('Surgery Speciality List');
export const pediatricSpeciality: InvestigatorPediatricSpeciality = 'PediatricSpeciality';
export const pediatricSpecialityTypeToken = new InjectionToken<InvestigatorPediatricSpeciality>(
  'PediatricSpeciality Type',
);
export const pediatricSpecialityTitle: InvestigatorPediatricSpecialityTitle = 'Pediatric';
export const pediatricSpecialityTitleToken = new InjectionToken<InvestigatorPediatricSpecialityTitle>(
  'Pediatric Speciality List Title',
);
export const pediatricSpecialityList: { label: PediatricSpeciality }[] = [
  { label: 'Pediatric - Neonatal - Perinatal Medicine' },
  { label: 'Pediatric Cardiology' },
  { label: 'Pediatric Critical Care' },
  { label: 'Pediatric Dermatology' },
  { label: 'Pediatric Emergency Medicine' },
  { label: 'Pediatric Endocrinology' },
  { label: 'Pediatric Gastroenterology' },
  { label: 'Pediatric Hematology/Oncology' },
  { label: 'Pediatric Infectious Diseases' },
  { label: 'Pediatric Nephrology' },
  { label: 'Pediatric Oncology' },
  { label: 'Pediatric Pathology' },
  { label: 'Pediatric Pulmonology' },
  { label: 'Pediatric Rheumatology' },
  { label: 'Pediatric Sleep Medicine' },
  { label: 'Pediatric Surgery - General' },
  { label: 'Pediatric Urology' },
  { label: 'Pediatrics - General' },
];
export const pediatricSpecialityToken = new InjectionToken<typeof pediatricSpecialityList>('Pediatric Speciality List');
export const nonClinicalSpeciality: InvestigatorNonClinicalSpeciality = 'NonClinicalSpeciality';
export const nonClinicalSpecialityTypeToken = new InjectionToken<InvestigatorNonClinicalSpeciality>(
  'NonClinicalSpeciality Type',
);
export const nonClinicalSpecialityTitle: InvestigatorNonClinicalSpecialityTitle = 'Non Clinical';
export const nonClinicalSpecialityTitleToken = new InjectionToken<InvestigatorNonClinicalSpecialityTitle>(
  'Non Clinical Speciality List Title',
);
export const nonClinicalSpecialityList: { label: NonClinicalSpeciality }[] = [
  { label: 'Non Clinical - Epidemiology' },
  { label: 'Non Clinical - Immunology' },
  { label: 'Non Clinical - Microbiology' },
  { label: 'Non Clinical - Psychology' },
];
export const nonClinicalSpecialityToken = new InjectionToken<typeof nonClinicalSpecialityList>(
  'Non Clinical Speciality List',
);
export const neuroSpeciality: InvestigatorNeuroSpeciality = 'NeuroSpeciality';
export const neuroSpecialityTypeToken = new InjectionToken<InvestigatorNeuroSpeciality>('NeuroSpeciality Type');
export const neuroSpecialityTitle: InvestigatorNeuroSpecialityTitle = 'Neuro';
export const neuroSpecialityTitleToken = new InjectionToken<InvestigatorNeuroSpecialityTitle>(
  'Neuro Speciality List Title',
);
export const neuroSpecialityList: { label: NeuroSpeciality }[] = [
  { label: 'Neurology' },
  { label: 'Neurology - Child' },
  { label: 'Neuropathology' },
  { label: 'Neurophysiology' },
  { label: 'Neuropsychiatry' },
  { label: 'Neuroradiology' },
  { label: 'Neuroscience' },
];
export const neuroSpecialityToken = new InjectionToken<typeof neuroSpecialityList>('Neuro Speciality List');
export const oncologySpeciality: InvestigatorOncologySpeciality = 'OncologySpeciality';
export const oncologySpecialityTypeToken = new InjectionToken<InvestigatorOncologySpeciality>(
  'OncologySpeciality Type',
);
export const oncologySpecialityTitle: InvestigatorOncologySpecialityTitle = 'Oncology';
export const oncologySpecialityTitleToken = new InjectionToken<InvestigatorOncologySpecialityTitle>(
  'Oncology Speciality List Title',
);
export const oncologySpecialityList: { label: OncologySpeciality }[] = [
  { label: 'Oncology' },
  { label: 'Oncology - Gynecologic' },
  { label: 'Oncology - Neurologic (Neuro-Oncology)' },
  { label: 'Neuro-Oncology' },
];
export const oncologySpecialityToken = new InjectionToken<typeof oncologySpecialityList>('Oncology Speciality List');
export const psychiatrySpeciality: InvestigatorPsychiatrySpeciality = 'PsychiatrySpeciality';
export const psychiatrySpecialityTypeToken = new InjectionToken<InvestigatorPsychiatrySpeciality>(
  'PsychiatrySpeciality Type',
);
export const psychiatrySpecialityTitle: InvestigatorPsychiatrySpecialityTitle = 'Psychiatry';
export const psychiatrySpecialityTitleToken = new InjectionToken<InvestigatorPsychiatrySpecialityTitle>(
  'Psychiatry Speciality List Title',
);
export const psychiatrySpecialityList: { label: PsychiatrySpeciality }[] = [
  { label: 'Psychiatry - Addiction' },
  { label: 'Psychiatry - Child/Adolescent' },
  { label: 'Psychiatry - General' },
  { label: 'Psychiatry - Geriatric' },
];
export const psychiatrySpecialityToken = new InjectionToken<typeof psychiatrySpecialityList>(
  'Psychiatry Speciality List',
);
export const generalSpeciality: InvestigatorGeneralSpeciality = 'GeneralSpeciality';
export const generalSpecialityTypeToken = new InjectionToken<InvestigatorGeneralSpeciality>('General Speciality Type');
export const generalSpecialityTitle: InvestigatorGeneralSpecialityTitle = 'General';
export const generalSpecialityTitleToken = new InjectionToken<InvestigatorGeneralSpecialityTitle>(
  'General Speciality List Title',
);
export const generalSpecialityList: { label: GeneralSpeciality }[] = [
  { label: 'Anesthesiology' },
  { label: 'Bone Marrow Transplant' },
  { label: 'Cardiac Electrophysiology' },
  { label: 'Cardiology' },
  { label: 'Cardiology - Interventional' },
  { label: 'Clinical Pharmacology' },
  { label: 'Critical Care Medicine' },
  { label: 'Dentistry' },
  { label: 'Dermatology' },
  { label: 'Dermatopathology' },
  { label: 'Emergency Medicine' },
  { label: 'Endocrinology' },
  { label: 'Family Medicine' },
  { label: 'Gastroenterology' },
  { label: 'Genitourinary Medicine' },
  { label: 'Geriatrics' },
  { label: 'Hematology' },
  { label: 'Hepatology' },
  { label: 'Infectious Diseases' },
  { label: 'Internal Medicine' },
  { label: 'Nephrology' },
];
export const generalSpecialityToken = new InjectionToken<typeof generalSpecialityList>('Other Speciality List');
export const generalSpecialityList2: { label: GeneralSpeciality }[] = [
  { label: 'Nuclear Medicine' },
  { label: 'Obesity' },
  { label: 'Obstetrics and Gynecology' },
  { label: 'Ophthalmology' },
  { label: 'Otolaryngology (ENT)' },
  { label: 'Pathology' },
  { label: 'Physical Medicine/Rehabilitation' },
  { label: 'Podiatric Medicine and Orthopedics' },
  { label: 'Preventive Medicine' },
  { label: 'Pulmonary Medicine' },
  { label: 'Radiation Oncology' },
  { label: 'Radiology' },
  { label: 'Reproductive Endocrinology - Infertility' },
  { label: 'Rheumatology' },
  { label: 'Sleep Medicine' },
  { label: 'Sports Medicine' },
  { label: 'Tropical Medicine' },
  { label: 'Urology' },
  { label: 'Vascular Neurology' },
];
export const generalSpecialityToken2 = new InjectionToken<typeof generalSpecialityList2>('Other Speciality List');
export const specialityMap: SpecialityMap = {};
specialityMap[`${generalSpeciality}`] = 0;
specialityMap[`${neuroSpeciality}`] = 1;
specialityMap[`${nonClinicalSpeciality}`] = 2;
specialityMap[`${oncologySpeciality}`] = 3;
specialityMap[`${pediatricSpeciality}`] = 4;
specialityMap[`${psychiatrySpeciality}`] = 5;
specialityMap[`${surgerySpeciality}`] = 6;
export const specialityMapToken = new InjectionToken<typeof specialityMap>('Speciality Map');

export const specialityFormProviders = [
  {
    provide: surgerySpecialityToken,
    useValue: surgerySpecialityList,
  },
  {
    provide: surgerySpecialityTitleToken,
    useValue: surgerySpecialityTitle,
  },
  {
    provide: surgerySpecialityTypeToken,
    useValue: surgerySpeciality,
  },
  {
    provide: pediatricSpecialityToken,
    useValue: pediatricSpecialityList,
  },
  {
    provide: pediatricSpecialityTitleToken,
    useValue: pediatricSpecialityTitle,
  },
  {
    provide: pediatricSpecialityTypeToken,
    useValue: pediatricSpeciality,
  },
  {
    provide: generalSpecialityToken,
    useValue: generalSpecialityList,
  },
  {
    provide: generalSpecialityToken2,
    useValue: generalSpecialityList2,
  },
  {
    provide: specialityMapToken,
    useValue: specialityMap,
  },
  {
    provide: generalSpecialityTitleToken,
    useValue: generalSpecialityTitle,
  },
  {
    provide: generalSpecialityTypeToken,
    useValue: generalSpeciality,
  },
  {
    provide: nonClinicalSpecialityToken,
    useValue: nonClinicalSpecialityList,
  },
  {
    provide: nonClinicalSpecialityTitleToken,
    useValue: nonClinicalSpecialityTitle,
  },
  {
    provide: nonClinicalSpecialityTypeToken,
    useValue: nonClinicalSpeciality,
  },
  {
    provide: neuroSpecialityToken,
    useValue: neuroSpecialityList,
  },
  {
    provide: neuroSpecialityTitleToken,
    useValue: neuroSpecialityTitle,
  },
  {
    provide: neuroSpecialityTypeToken,
    useValue: neuroSpeciality,
  },
  {
    provide: oncologySpecialityToken,
    useValue: oncologySpecialityList,
  },
  {
    provide: oncologySpecialityTitleToken,
    useValue: oncologySpecialityTitle,
  },
  {
    provide: oncologySpecialityTypeToken,
    useValue: oncologySpeciality,
  },
  {
    provide: psychiatrySpecialityToken,
    useValue: psychiatrySpecialityList,
  },
  {
    provide: psychiatrySpecialityTitleToken,
    useValue: pediatricSpecialityTitle,
  },
  {
    provide: psychiatrySpecialityTypeToken,
    useValue: psychiatrySpeciality,
  },
];
