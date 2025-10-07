import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { sagaBlueColors, generatePrimeNGColors } from '../colors/saga-blue-colors';

/**
 * Saga-Blue Preset for PrimeNG 20
 * Recreates the PrimeNG 17 saga-blue theme using token-based theming
 * Based on exact color values from PrimeNG 17 saga-blue theme
 * Uses centralized color system to avoid duplication
 */
const SagaBluePreset = definePreset(Aura, {
  /**
   * Semantic color tokens
   */
  semantic: {
    primary: sagaBlueColors.primary,
    colorScheme: {
      light: {
        primary: {
          color: sagaBlueColors.primary[500],
          inverseColor: sagaBlueColors.white
        },
        surface: sagaBlueColors.surface,
        text: sagaBlueColors.text
      }
    },
    focusRing: {
      width: '0.2rem',
      style: 'solid',
      offset: '0'
    }
  },
  
  /**
   * Complete color palette from centralized colors
   */
  primitive: generatePrimeNGColors(sagaBlueColors)
});

export default SagaBluePreset;