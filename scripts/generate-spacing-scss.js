#!/usr/bin/env node

/**
 * Generate SCSS spacing variables from Tailwind config
 * 
 * This script reads the spacing values from tailwind.config.js and generates
 * a SCSS file with matching variables, ensuring single source of truth.
 */

const fs = require('fs');
const path = require('path');

// Read Tailwind config
const configPath = path.join(__dirname, '../tailwind.config.js');
const config = require(configPath);

// Extract spacing values from Tailwind config
const spacing = config.theme.extend.spacing;

// Generate SCSS content with CSS variables
const generateScssContent = (spacing) => {
  const cssVariables = Object.entries(spacing)
    .map(([key, value]) => {
      const pxValue = parseFloat(value) * 16; // Convert rem to px
      return `  --spacing-${key}: ${value}; /* ${pxValue}px */`;
    })
    .join('\n');

  return `// Tailwind Spacing Scale for SCSS
// This file is AUTO-GENERATED from tailwind.config.js
// DO NOT EDIT MANUALLY - Run 'npm run generate-spacing' to update
// 
// ⚠️ WARNING: This file is part of the theme library's auto-generated styles.
// All files under projects/theme/src/lib/styles/ are auto-generated.

:root {
  /* Tailwind spacing scale - AUTO-GENERATED from tailwind.config.js */
${cssVariables}
}
`;
};

// Generate and write SCSS file
const scssContent = generateScssContent(spacing);
const outputPath = path.join(__dirname, '../projects/theme/src/lib/styles/tailwind-spacing.scss');

fs.writeFileSync(outputPath, scssContent);

console.log('✅ Generated tailwind-spacing.scss from tailwind.config.js');
console.log(`📁 Output: ${outputPath}`);
console.log(`📊 Variables: ${Object.keys(spacing).length} spacing values`);
