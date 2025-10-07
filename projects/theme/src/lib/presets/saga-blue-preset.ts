import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * Saga-Blue Preset for PrimeNG 20
 * Recreates the PrimeNG 17 saga-blue theme using token-based theming
 * Based on exact color values from PrimeNG 17 saga-blue theme
 */
const SagaBluePreset = definePreset(Aura, {
  // Semantic color tokens
  semantic: {
    primary: {
      50: '#f4fafe',
      100: '#cae6fc',
      200: '#a0d2fa',
      300: '#75bef8',
      400: '#4baaf5',
      /**
       * Main saga-blue color
       */
      500: '#2196f3',
      600: '#1c80cf',
      700: '#1769aa',
      800: '#125386',
      900: '#0d3c61'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#2196f3',
          inverseColor: '#ffffff'
        },
        surface: {
          ground: '#f8f9fa',
          section: '#ffffff',
          card: '#ffffff',
          overlay: '#ffffff',
          border: '#dee2e6',
          hover: '#e9ecef'
        },
        text: {
          primary: '#495057',
          secondary: '#6c757d',
          disabled: '#adb5bd'
        }
      }
    },
    focusRing: {
      width: '0.2rem',
      style: 'solid',
      offset: '0'
    }
  }
});

export default SagaBluePreset;
