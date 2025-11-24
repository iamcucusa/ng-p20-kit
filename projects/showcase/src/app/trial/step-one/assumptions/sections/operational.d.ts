import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export type InvestigatorGeneralSpeciality = 'GeneralSpeciality';
export type InvestigatorGeneralSpecialityTitle = 'General';
export type InvestigatorSurgerySpeciality = 'SurgerySpeciality';
export type InvestigatorSurgerySpecialityTitle = 'Surgery';
export type InvestigatorPediatricSpeciality = 'PediatricSpeciality';
export type InvestigatorPediatricSpecialityTitle = 'Pediatric';
export type InvestigatorNonClinicalSpeciality = 'NonClinicalSpeciality';
export type InvestigatorNonClinicalSpecialityTitle = 'Non Clinical';
export type InvestigatorNeuroSpeciality = 'NeuroSpeciality';
export type InvestigatorNeuroSpecialityTitle = 'Neuro';
export type InvestigatorPsychiatrySpeciality = 'PsychiatrySpeciality';
export type InvestigatorPsychiatrySpecialityTitle = 'Psychiatry';
export type InvestigatorOncologySpeciality = 'OncologySpeciality';
export type InvestigatorOncologySpecialityTitle = 'Oncology';
export type SpecialityMap = { [key: string]: number };
export type InvestigatorSpecialityTypes =
  | InvestigatorSurgerySpeciality
  | InvestigatorPediatricSpeciality
  | InvestigatorNonClinicalSpeciality
  | InvestigatorNeuroSpeciality
  | InvestigatorOncologySpeciality
  | InvestigatorPsychiatrySpeciality
  | InvestigatorGeneralSpeciality;
export type SurgerySpeciality =
  | 'Surgery - Cardiac'
  | 'Surgery - Cardiothoracic Thoracic'
  | 'Surgery - Colorectal'
  | 'Surgery - General'
  | 'Surgery - Neurologic (Neurosurgery)'
  | 'Surgery - Oncology'
  | 'Surgery - Orthopedic'
  | 'Surgery - Plastic'
  | 'Surgery - Podiatric'
  | 'Surgery - Vascular'
  | 'Surgery – Transplantation'
  | 'Surgical Critical Care';
export type PediatricSpeciality =
  | 'Pediatric - Neonatal - Perinatal Medicine'
  | 'Pediatric Cardiology'
  | 'Pediatric Critical Care'
  | 'Pediatric Dermatology'
  | 'Pediatric Emergency Medicine'
  | 'Pediatric Endocrinology'
  | 'Pediatric Gastroenterology'
  | 'Pediatric Hematology/Oncology'
  | 'Pediatric Infectious Diseases'
  | 'Pediatric Nephrology'
  | 'Pediatric Oncology'
  | 'Pediatric Pathology'
  | 'Pediatric Pulmonology'
  | 'Pediatric Rheumatology'
  | 'Pediatric Sleep Medicine'
  | 'Pediatric Surgery - General'
  | 'Pediatric Urology'
  | 'Pediatrics - General';
export type NonClinicalSpeciality =
  | 'Non Clinical - Epidemiology'
  | 'Non Clinical - Immunology'
  | 'Non Clinical - Microbiology'
  | 'Non Clinical - Psychology';
export type NeuroSpeciality =
  | 'Neurology'
  | 'Neurology - Child'
  | 'Neuropathology'
  | 'Neurophysiology'
  | 'Neuropsychiatry'
  | 'Neuroradiology'
  | 'Neuroscience';
export type OncologySpeciality =
  | 'Oncology'
  | 'Oncology - Gynecologic'
  | 'Oncology - Neurologic (Neuro-Oncology)'
  | 'Neuro-Oncology';
export type PsychiatrySpeciality =
  | 'Psychiatry - Addiction'
  | 'Psychiatry - Child/Adolescent'
  | 'Psychiatry - General'
  | 'Psychiatry - Geriatric';
export type GeneralSpeciality =
  | 'Anesthesiology'
  | 'Bone Marrow Transplant'
  | 'Cardiac Electrophysiology'
  | 'Cardiology'
  | 'Cardiology - Interventional'
  | 'Clinical Pharmacology'
  | 'Critical Care Medicine'
  | 'Dentistry'
  | 'Dermatology'
  | 'Dermatopathology'
  | 'Emergency Medicine'
  | 'Endocrinology'
  | 'Family Medicine'
  | 'Gastroenterology'
  | 'Genitourinary Medicine'
  | 'Geriatrics'
  | 'Hematology'
  | 'Hepatology'
  | 'Infectious Diseases'
  | 'Internal Medicine'
  | 'Nephrology'
  | 'Nuclear Medicine'
  | 'Obesity'
  | 'Obstetrics and Gynecology'
  | 'Ophthalmology'
  | 'Otolaryngology (ENT)'
  | 'Pathology'
  | 'Physical Medicine/Rehabilitation'
  | 'Podiatric Medicine and Orthopedics'
  | 'Preventive Medicine'
  | 'Pulmonary Medicine'
  | 'Radiation Oncology'
  | 'Radiology'
  | 'Reproductive Endocrinology - Infertility'
  | 'Rheumatology'
  | 'Sleep Medicine'
  | 'Sports Medicine'
  | 'Tropical Medicine'
  | 'Urology'
  | 'Vascular Neurology'
  | 'Other';
export type InvestigatorSpeciality =
  | SurgerySpeciality
  | PediatricSpeciality
  | NonClinicalSpeciality
  | NeuroSpeciality
  | OncologySpeciality
  | PsychiatrySpeciality
  | GeneralSpeciality;
export type InvestigatorSpecialityItem = {
  speciality: InvestigatorSpeciality;
  group: InvestigatorSpecialityTypes;
};

export interface TrialOperational {
  averageCTLFTE: number | null;
  averageCTMFTE: number | null;
  averageCRAFTE: number | null;
  averageSMLFTE: number | null;
  patientVisits: number | null;
  patientCRAVisits: number | null;
  siteEquipment: string | null;
  trainingRequirements: string | null;
  investigatorSpecialities: InvestigatorSpecialityItem[] | null;
  otherSpecialities: boolean | null;
  otherSpecialitiesDescription: string | null;
  centralLab: boolean | null;
  centralLabDescription: string | null;
  otherVendors: boolean | null;
  otherVendorsDescription: string | null;
  centralServices: boolean | null;
  centralServicesDescription: string | null;
  additionalCosts: string | null;
}

export type AssumptionsOperationalFieldsTitles = AssumptionsFieldsNames<TrialOperational>;
export type AssumptionsOperationalControls = AssumptionsSectionsFields<AssumptionsOperationalFieldsTitles>;
export type ColDefTrialOperational = Record<keyof TrialOperational, undefined>;
