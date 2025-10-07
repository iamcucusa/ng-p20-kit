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
    secondary: sagaBlueColors.bluegray,
    success: sagaBlueColors.green,
    info: sagaBlueColors.blue,
    warning: sagaBlueColors.yellow,
    help: sagaBlueColors.purple,
    danger: sagaBlueColors.red,
    colorScheme: {
      light: {
        primary: {
          color: sagaBlueColors.primary[500],
          inverseColor: sagaBlueColors.white
        },
        surface: sagaBlueColors.surface,
        text: sagaBlueColors.text
      },
      dark: {
        primary: {
          color: sagaBlueColors.primary[400],
          inverseColor: sagaBlueColors.white
        },
        surface: {
          ground: sagaBlueColors.gray[900],
          section: sagaBlueColors.gray[800],
          card: sagaBlueColors.gray[800],
          overlay: sagaBlueColors.gray[800],
          border: sagaBlueColors.gray[700],
          hover: sagaBlueColors.gray[700]
        },
        text: {
          primary: sagaBlueColors.gray[100],
          secondary: sagaBlueColors.gray[300],
          disabled: sagaBlueColors.gray[500]
        }
      }
    },
    focusRing: {
      width: '0.2rem',
      style: 'solid',
      offset: '0'
    }
  },

  /**
   * Reserved keys from original saga-blue theme
   */
  reserved: {
    contentPadding: '1rem',
    inlineSpacing: '0.5rem',
    borderRadius: '3px',
    maskbg: 'rgba(0, 0, 0, 0.4)',
    highlightBg: sagaBlueColors.blue[50],
    highlightTextColor: sagaBlueColors.text.primary
  },
  
  /**
   * Component-specific tokens
   */
  component: {
    button: {
      background: sagaBlueColors.white,
      borderColor: sagaBlueColors.gray[300],
      color: sagaBlueColors.text.primary,
      hoverBackground: sagaBlueColors.surface.hover,
      focusRing: sagaBlueColors.blue[200]
    },
    inputtext: {
      background: sagaBlueColors.white,
      borderColor: sagaBlueColors.gray[300],
      color: sagaBlueColors.text.primary,
      hoverBorderColor: sagaBlueColors.primary[500],
      focusBorderColor: sagaBlueColors.primary[500],
      focusRing: sagaBlueColors.blue[200],
      invalidBorderColor: sagaBlueColors.red[500]
    },
    datatable: {
      headerBackground: sagaBlueColors.surface.section,
      headerColor: sagaBlueColors.text.primary,
      rowHoverBackground: sagaBlueColors.surface.hover,
      borderColor: sagaBlueColors.surface.border
    },
    tabview: {
      panelBackground: 'transparent'
    },
    scrollpanel: {
      barBackground: sagaBlueColors.primary[500],
      barHoverBackground: sagaBlueColors.primary[600]
    }
  },

  /**
   * Complete color palette from centralized colors
   */
  primitive: generatePrimeNGColors(sagaBlueColors)
});

export default SagaBluePreset;