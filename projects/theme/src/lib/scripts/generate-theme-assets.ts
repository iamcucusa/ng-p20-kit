/**
 * Script to generate theme assets from centralized colors
 * This ensures single source of truth for all color values
 */

import { sagaBlueColors, generateCSSVariables, generateTailwindColors } from '../colors/saga-blue-colors';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Generate CSS variables file
 */
function generateCSSVariablesFile() {
  const cssVariables = generateCSSVariables(sagaBlueColors);
  
  let cssContent = `/**
 * Saga-Blue Theme CSS Variables
 * Auto-generated from centralized color system
 * DO NOT EDIT MANUALLY - Edit saga-blue-colors.ts instead
 */

@layer base {
  :root {
`;

  // Add all CSS variables
  for (const [varName, value] of Object.entries(cssVariables)) {
    cssContent += `    ${varName}: ${value};\n`;
  }

  cssContent += `    
    /* Focus ring */
    --focus-ring: 0 0 0 0.2rem ${sagaBlueColors.blue[200]};
    
    /* Highlight colors */
    --highlight-bg: ${sagaBlueColors.blue[50]};
    --highlight-text-color: ${sagaBlueColors.text.primary};
    
    /* Mask/overlay */
    --maskbg: rgba(0, 0, 0, 0.4);
    
    /* Spacing */
    --content-padding: 1rem;
    --inline-spacing: 0.5rem;
    
    /* Border radius */
    --border-radius: 3px;
    
    /* Font family */
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
    /* Color scheme */
    color-scheme: light;
  }
}

/* Layer 2: Component styles */
@layer components {
  /* Custom scroll panel styles */
  .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
    border-right: 9px solid var(--surface-card);
  }
  
  .p-scrollpanel.custombar1 .p-scrollpanel-bar {
    background-color: var(--primary-color);
    opacity: 1;
    transition: background-color 0.2s;
  }
  
  .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
    background-color: #007ad9;
  }
  
  .p-scrollpanel.custombar2 .p-scrollpanel-wrapper {
    border-right: 9px solid var(--surface-card);
  }
  
  .p-scrollpanel.custombar2 .p-scrollpanel-bar {
    background-color: ${sagaBlueColors.purple[500]};
    border-radius: 0;
    opacity: 1;
    transition: background-color 0.2s;
  }
  
  /* Overlay styles */
  .p-component-overlay {
    background-color: ${sagaBlueColors.blue[50]}60;
  }
  
  /* TabView styles */
  .p-tabview .p-tabview-panels {
    background: transparent;
  }
  
  /* DataTable styles */
  .p-datatable .p-datatable-tbody > tr.pg-no-hover,
  .p-datatable .p-datatable-tbody > tr.pg-no-hover:hover {
    background: transparent !important;
    box-shadow: none !important;
  }
  
  .p-datatable .p-datatable-tbody > tr.pg-no-hover > td {
    cursor: auto !important;
    border: 0;
    padding: 0;
  }
  
  /* Button fluid styles */
  .p-fluid .p-button {
    /* width: auto; - commented out as per original */
  }
}

/* Layer 3: Utilities */
@layer utilities {
  /* Required field indicator */
  .p-required:after {
    content: "*";
    color: ${sagaBlueColors.red[600]};
  }
  
  /* Visually hidden for accessibility */
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
  
  /* Plotly mode bar hiding */
  .modebar-container {
    display: none;
  }
}

/* Layer 4: Base styles */
@layer base {
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
  html {
    font-size: 1rem;
  }
  
  body {
    font-family: var(--font-family);
    background-color: var(--surface-ground);
    color: var(--text-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }
}`;

  const outputPath = path.join(__dirname, '../styles/saga-blue-layers.css');
  fs.writeFileSync(outputPath, cssContent);
}

/**
 * Generate Tailwind config
 */
function generateTailwindConfig() {
  const tailwindColors = generateTailwindColors(sagaBlueColors);
  
  const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/*.{html,ts,mdx}',     // Angular templates + stories
    './**/*.stories.@(ts|mdx)'           // extra guard for SB stories
  ],
  theme: { 
    extend: {
      // PrimeFlex-compatible spacing scale
      spacing: {
        '0': '0rem',     // 0px
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px (--inline-spacing)
        '3': '1rem',     // 16px (--content-padding + PrimeFlex p-3)
        '4': '1.5rem',   // 24px (PrimeFlex p-4)
        '5': '2rem',     // 32px (PrimeFlex p-5)
        '6': '3rem',     // 48px (PrimeFlex p-6)
        '7': '4rem',     // 64px (PrimeFlex p-7)
        '8': '5rem',     // 80px (PrimeFlex p-8)
      },
      colors: ${JSON.stringify(tailwindColors, null, 6)},
      // Surface colors
      'surface': {
        'ground': '#f8f9fa',
        'section': '#ffffff',
        'card': '#ffffff',
        'overlay': '#ffffff',
        'border': '#dee2e6',
        'hover': '#e9ecef'
      },
      // Text colors
      'text': {
        'primary': '#495057',
        'secondary': '#6c757d',
        'disabled': '#adb5bd'
      },
      // PrimeNG surface colors for Tailwind utilities
      'surface-section': '#ffffff'
    }
  },
  plugins: [require('tailwindcss-primeui')]
};`;

  const outputPath = path.join(__dirname, '../../../tailwind.config.js');
  fs.writeFileSync(outputPath, config);
}

/**
 * Main execution
 */
if (require.main === module) {
  generateCSSVariablesFile();
  generateTailwindConfig();
}
