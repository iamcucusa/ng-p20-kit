export type CaptarioSource = 'CAPTARIO';

export type DataSource = 'CTMS' | 'DQS' | 'CITELINE' | CaptarioSource | 'unknown';

export type DataSourceMapping = {
  [K in DataSource]: string;
};
