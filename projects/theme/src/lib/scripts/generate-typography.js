#!/usr/bin/env node

/**
 * Typography Generation Script
 * Generates Tailwind CSS typography configuration and SCSS variables
 * from centralized typography tokens for consistent design system
 */

const fs = require('fs');
const path = require('path');

// Typography design tokens
const typographyTokens = {
  fontSize: {
    'xs': '0.75rem',     // 12px
    'sm': '0.875rem',   // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
    '9xl': '8rem',      // 128px
  },
  fontWeight: {
    'thin': '100',
    'extralight': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900',
  },
  lineHeight: {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
  }
};

function generateTypographySCSS() {
  const cssVariables = Object.entries(typographyTokens.fontSize)
    .map(([key, value]) => {
      const pxValue = parseFloat(value) * 16;
      return `  --font-size-${key}: ${value}; /* ${pxValue}px */`;
    })
    .join('\n');

  const fontWeightVariables = Object.entries(typographyTokens.fontWeight)
    .map(([key, value]) => `  --font-weight-${key}: ${value};`)
    .join('\n');

  const lineHeightVariables = Object.entries(typographyTokens.lineHeight)
    .map(([key, value]) => `  --line-height-${key}: ${value};`)
    .join('\n');

  const scssContent = `// Typography Design Tokens
// This file is AUTO-GENERATED from typography tokens
// DO NOT EDIT MANUALLY - Run 'npm run generate-typography' to update
//
// ⚠️ WARNING: This file is part of the theme library's auto-generated styles.
// All files under projects/theme/src/lib/styles/ are auto-generated.

:root {
  /* Font Size Tokens - AUTO-GENERATED */
${cssVariables}

  /* Font Weight Tokens - AUTO-GENERATED */
${fontWeightVariables}

  /* Line Height Tokens - AUTO-GENERATED */
${lineHeightVariables}
}

// SCSS Variables for use in components
$font-sizes: (
  'xs': var(--font-size-xs),
  'sm': var(--font-size-sm),
  'base': var(--font-size-base),
  'lg': var(--font-size-lg),
  'xl': var(--font-size-xl),
  '2xl': var(--font-size-2xl),
  '3xl': var(--font-size-3xl),
  '4xl': var(--font-size-4xl),
  '5xl': var(--font-size-5xl),
  '6xl': var(--font-size-6xl),
  '7xl': var(--font-size-7xl),
  '8xl': var(--font-size-8xl),
  '9xl': var(--font-size-9xl),
);

$font-weights: (
  'thin': var(--font-weight-thin),
  'extralight': var(--font-weight-extralight),
  'light': var(--font-weight-light),
  'normal': var(--font-weight-normal),
  'medium': var(--font-weight-medium),
  'semibold': var(--font-weight-semibold),
  'bold': var(--font-weight-bold),
  'extrabold': var(--font-weight-extrabold),
  'black': var(--font-weight-black),
);

$line-heights: (
  'none': var(--line-height-none),
  'tight': var(--line-height-tight),
  'snug': var(--line-height-snug),
  'normal': var(--line-height-normal),
  'relaxed': var(--line-height-relaxed),
  'loose': var(--line-height-loose),
);

// Typography utility mixins
@mixin text-xs { font-size: var(--font-size-xs); }
@mixin text-sm { font-size: var(--font-size-sm); }
@mixin text-base { font-size: var(--font-size-base); }
@mixin text-lg { font-size: var(--font-size-lg); }
@mixin text-xl { font-size: var(--font-size-xl); }
@mixin text-2xl { font-size: var(--font-size-2xl); }
@mixin text-3xl { font-size: var(--font-size-3xl); }
@mixin text-4xl { font-size: var(--font-size-4xl); }
@mixin text-5xl { font-size: var(--font-size-5xl); }
@mixin text-6xl { font-size: var(--font-size-6xl); }
@mixin text-7xl { font-size: var(--font-size-7xl); }
@mixin text-8xl { font-size: var(--font-size-8xl); }
@mixin text-9xl { font-size: var(--font-size-9xl); }

@mixin font-thin { font-weight: var(--font-weight-thin); }
@mixin font-extralight { font-weight: var(--font-weight-extralight); }
@mixin font-light { font-weight: var(--font-weight-light); }
@mixin font-normal { font-weight: var(--font-weight-normal); }
@mixin font-medium { font-weight: var(--font-weight-medium); }
@mixin font-semibold { font-weight: var(--font-weight-semibold); }
@mixin font-bold { font-weight: var(--font-weight-bold); }
@mixin font-extrabold { font-weight: var(--font-weight-extrabold); }
@mixin font-black { font-weight: var(--font-weight-black); }

@mixin leading-none { line-height: var(--line-height-none); }
@mixin leading-tight { line-height: var(--line-height-tight); }
@mixin leading-snug { line-height: var(--line-height-snug); }
@mixin leading-normal { line-height: var(--line-height-normal); }
@mixin leading-relaxed { line-height: var(--line-height-relaxed); }
@mixin leading-loose { line-height: var(--line-height-loose); }
`;

  const outputPath = path.join(__dirname, '../styles/typography.scss');
  fs.writeFileSync(outputPath, scssContent);
  console.log('✅ Generated typography.scss');
}

function updateTailwindConfig() {
  const configPath = path.join(__dirname, '../../../../../tailwind.config.js');
  
  if (!fs.existsSync(configPath)) {
    console.log('❌ tailwind.config.js not found');
    return;
  }

  // Read current config
  const currentConfig = fs.readFileSync(configPath, 'utf8');
  
  // Check if typography is already configured
  if (currentConfig.includes('fontSize:') && currentConfig.includes('fontWeight:')) {
    return;
  }

  // Generate typography config
  const typographyConfig = `
      // Typography scale - AUTO-GENERATED
      fontSize: ${JSON.stringify(typographyTokens.fontSize, null, 6)},
      fontWeight: ${JSON.stringify(typographyTokens.fontWeight, null, 6)},
      lineHeight: ${JSON.stringify(typographyTokens.lineHeight, null, 6)},`;

  // Insert typography config into theme.extend
  const updatedConfig = currentConfig.replace(
    /theme:\s*{\s*extend:\s*{/,
    `theme: {
    extend: {${typographyConfig}`
  );

  fs.writeFileSync(configPath, updatedConfig);
  console.log('✅ Updated tailwind.config.js with typography');
}

function generateTypographyDocumentation() {
  const docContent = `# Typography System

## Available Classes

### Font Sizes
${Object.entries(typographyTokens.fontSize)
  .map(([key, value]) => `- \`text-${key}\`: ${value} (${parseFloat(value) * 16}px)`)
  .join('\n')}

### Font Weights
${Object.entries(typographyTokens.fontWeight)
  .map(([key, value]) => `- \`font-${key}\`: ${value}`)
  .join('\n')}

### Line Heights
${Object.entries(typographyTokens.lineHeight)
  .map(([key, value]) => `- \`leading-${key}\`: ${value}`)
  .join('\n')}

## Usage Examples

\`\`\`html
<!-- Headings -->
<h1 class="text-4xl font-bold leading-tight">Main Heading</h1>
<h2 class="text-2xl font-semibold leading-snug">Section Heading</h2>
<h3 class="text-xl font-medium leading-normal">Subsection</h3>

<!-- Body Text -->
<p class="text-base font-normal leading-relaxed">Body text</p>
<p class="text-sm font-normal leading-normal">Small text</p>

<!-- Responsive Typography -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
\`\`\`

## SCSS Usage

\`\`\`scss
@import '../../theme/src/lib/styles/typography.scss';

.heading {
  @include text-2xl;
  @include font-bold;
  @include leading-tight;
}

.body-text {
  @include text-base;
  @include font-normal;
  @include leading-relaxed;
}
\`\`\`
`;

  const outputPath = path.join(__dirname, '../styles/typography-usage.md');
  fs.writeFileSync(outputPath, docContent);
}

// Main execution
function main() {
  console.log('🎨 Generating typography system...');
  
  try {
    generateTypographySCSS();
    updateTailwindConfig();
    generateTypographyDocumentation();
    
    console.log('✅ Typography system generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating typography system:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  typographyTokens,
  generateTypographySCSS,
  updateTailwindConfig,
  generateTypographyDocumentation
};
