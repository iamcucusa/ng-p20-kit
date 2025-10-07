/**
 * Theme Library for ng-p20-kit
 * Provides PrimeNG 20 token-based theming with saga-blue preset
 */

// Export the saga-blue preset
export { default as SagaBluePreset } from './presets/saga-blue-preset';

// Export theme utilities
export * from './presets/saga-blue-preset';

// Re-export PrimeNG theming utilities
export { providePrimeNG } from 'primeng/config';
export { definePreset } from '@primeuix/themes';
