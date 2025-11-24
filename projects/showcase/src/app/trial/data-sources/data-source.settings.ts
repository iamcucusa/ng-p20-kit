import { DataSourceMapping } from '@data-sources/data-source';
import { InjectionToken } from '@angular/core';

export const step1SourceMapping: Partial<DataSourceMapping> = {
  CAPTARIO: 'bg-purple-400 border-purple-400',
};

export const step2SourceMapping: Partial<DataSourceMapping> = {
  CITELINE: 'bg-orange-400 border-orange-400',
};

export const step4SourceMapping: Partial<DataSourceMapping> = {
  DQS: 'bg-indigo-400 border-indigo-400',
};

export const dataSourceMapping: DataSourceMapping = {
  CTMS: 'bg-cyan-400 border-cyan-400',
  DQS: 'bg-indigo-400 border-indigo-400',
  CAPTARIO: 'bg-purple-400 border-purple-400',
  CITELINE: 'bg-orange-400 border-orange-400',
  unknown: 'bg-gray-200 border-gray-200',
};

export const allDataSourcesMappingToken = new InjectionToken<DataSourceMapping>('dataSourceMapping');

export const step1SourceMappingToken = new InjectionToken<Partial<DataSourceMapping>>('step1SourceMapping');

export const step2SourceMappingToken = new InjectionToken<Partial<DataSourceMapping>>('step2SourceMapping');

export const step4SourceMappingToken = new InjectionToken<Partial<DataSourceMapping>>('step2SourceMapping');

export const dataSourceTokens = [
  {
    provide: allDataSourcesMappingToken,
    useValue: dataSourceMapping,
  },
  {
    provide: step1SourceMappingToken,
    useValue: step1SourceMapping,
  },
  {
    provide: step2SourceMappingToken,
    useValue: step2SourceMapping,
  },
  {
    provide: step4SourceMappingToken,
    useValue: step4SourceMapping,
  },
];
