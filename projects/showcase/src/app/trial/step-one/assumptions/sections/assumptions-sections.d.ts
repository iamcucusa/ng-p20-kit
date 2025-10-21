export interface AssumptionSectionTabContent {
  updateTrial: () => void;
  formState$?: Observable<boolean>;
  setupFormStateEmission(): void;
}
