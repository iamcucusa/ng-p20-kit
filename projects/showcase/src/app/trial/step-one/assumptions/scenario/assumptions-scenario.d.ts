type AssumptionsScenarioNames<Type> = {
  [Property in keyof Type]: string;
};

export interface AssumptionsScenarioMetadata {
  id: number;
  name: string | null;
  slug: string | null;
  title: string | null;
  lastUpdate: string | null;
  timeCreated: string | null;
  source: number | null;
  by: string | null;
  order: number | null;
  sections: AssumptionsScenarioPage[] | null;
}

export type AssumptionsScenarioCreateData = Pick<
  AssumptionsScenarioMetadata,
  'by' | 'lastUpdate' | 'name' | 'title' | 'order' | 'slug' | 'source' | 'sections'
>;

export type AssumptionsScenarioCreateFields = Pick<
  AssumptionsScenarioMetadata,
  'name' | 'title' | 'source' | 'sections'
>;

export type ScenarioFieldsTitles = AssumptionsScenarioNames<AssumptionsScenarioCreateFields>;
export type ScenarioControls<Type> = {
  [Property in keyof Type]: { name: string; export: boolean; title: string; unit?: string };
};
export type ScenarioCreateControls = ScenarioControls<AssumptionsScenarioCreateFields>;

export type ColDefScenarioMetadata = Record<keyof AssumptionsScenarioMetadata, undefined>;


export interface BaseScenarioData {
  metadata: AssumptionsScenarioMetadata;
}

export type AssumptionsScenario = BaseScenarioData;
