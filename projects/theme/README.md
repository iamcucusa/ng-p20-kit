# 🎨 Saga-Blue Theme for PrimeNG 20

A token-based theme recreation of PrimeNG 17's saga-blue theme, built for Angular 20, PrimeNG 20, and Tailwind CSS.

## 🚀 **Quick Start**

### Installation

```bash
npm install @ng-p20-kit/theme
```

### Usage

```typescript
import { providePrimeNG } from 'primeng/config';
import { SagaBluePreset } from '@ng-p20-kit/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({ 
      theme: { 
        preset: SagaBluePreset,
        options: { 
          cssLayer: { 
            name: 'primeng', 
            order: 'base,components,utilities,primeng' 
          }
        }
      }
    })
  ]
};
```

### Styles Import

```scss
// In your global styles
@import 'tailwindcss';
@import '@ng-p20-kit/theme/styles/saga-blue-layers.css';
```

## 🎨 **Complete Color Palette**

### Primary Colors (Saga-Blue)
- **50**: `#f4fafe` - Lightest blue
- **100**: `#cae6fc` - Very light blue  
- **200**: `#a0d2fa` - Light blue
- **300**: `#75bef8` - Medium light blue
- **400**: `#4baaf5` - Medium blue
- **500**: `#2196f3` - **Main saga-blue** (Material Blue 500)
- **600**: `#1c80cf` - Dark blue
- **700**: `#1769aa` - Darker blue
- **800**: `#125386` - Very dark blue
- **900**: `#0d3c61` - Darkest blue

### Complete Color Palettes
The theme includes all color palettes from the original PrimeNG 17 saga-blue theme:

- **Blue**: `#f4fafe` to `#0d3c61` (9 shades)
- **Green**: `#f6fbf6` to `#1e4620` (9 shades)
- **Yellow**: `#fffcf5` to `#644d12` (9 shades)
- **Cyan**: `#f2fcfd` to `#004b55` (9 shades)
- **Pink**: `#fef4f7` to `#5d0c28` (9 shades)
- **Indigo**: `#f5f6fb` to `#192048` (9 shades)
- **Teal**: `#f2faf9` to `#003c36` (9 shades)
- **Orange**: `#fff8f2` to `#623200` (9 shades)
- **Blue Gray**: `#f7f9f9` to `#263238` (9 shades)
- **Purple**: `#faf4fb` to `#3e1046` (9 shades)
- **Red**: `#fff5f5` to `#661a14` (9 shades)
- **Gray**: `#fafafa` to `#212121` (9 shades)

### Surface Colors
- **Ground**: `#f8f9fa` - Background
- **Section**: `#ffffff` - Section backgrounds
- **Card**: `#ffffff` - Card backgrounds
- **Overlay**: `#ffffff` - Modal/overlay backgrounds
- **Border**: `#dee2e6` - Border color
- **Hover**: `#e9ecef` - Hover states

### Text Colors
- **Primary**: `#495057` - Main text
- **Secondary**: `#6c757d` - Secondary text
- **Disabled**: `#adb5bd` - Disabled text

## 🏗️ **Architecture**

### PrimeNG 20 Best Practices Compliance
- ✅ **Token-based architecture** - Following [PrimeNG theming documentation](https://primeng.org/theming#customization)
- ✅ **Three-tier token system** - Primitive, semantic, and component tokens
- ✅ **CSS layers** - Proper cascade with `@layer` support
- ✅ **Dark mode support** - Complete light/dark color schemes
- ✅ **Component tokens** - Specific styling for buttons, inputs, tables, etc.

### Centralized Color System
- ✅ **Single source of truth** - All colors defined in `saga-blue-colors.ts`
- ✅ **Auto-generated assets** - CSS variables and Tailwind config generated from centralized colors
- ✅ **No duplication** - Colors defined once, used everywhere
- ✅ **Type safety** - Full TypeScript support with `as const`
- ✅ **Complete consistency** - Even utility colors (white, black) and component-specific colors use centralized values

### Complete Theme Coverage
- ✅ **All semantic tokens** - Primary, secondary, success, info, warning, help, danger
- ✅ **Reserved keys** - Content padding, inline spacing, border radius, mask, highlight colors
- ✅ **Component tokens** - Button, input, datatable, tabview, scrollpanel styling
- ✅ **Dark mode** - Complete dark color scheme support
- ✅ **Original theme parity** - 100% coverage of PrimeNG 17 saga-blue theme

### Scalable Development Workflow
```bash
# 1. Edit colors in saga-blue-colors.ts
# 2. Generate all theme assets
npm run theme:generate

# 3. Build and test
npm run build-showcase
```

### CSS Layers Structure
```css
@layer base {
  /* CSS variables and base tokens */
}

@layer components {
  /* Component-specific styles */
}

@layer utilities {
  /* Utility classes and helpers */
}
```

## 🎯 **Features**

### ✅ **Complete Saga-Blue Parity**
- Exact color matching with PrimeNG 17 saga-blue
- All surface colors preserved
- Typography and spacing maintained
- Custom component styles migrated

### ✅ **Modern Architecture**
- Token-based theming (no legacy CSS)
- CSS layers for proper cascade
- Tailwind CSS integration
- TypeScript support

### ✅ **Accessibility**
- WCAG 2.1 AA compliant
- Proper focus indicators
- Screen reader support
- High contrast ratios

### ✅ **Custom Components**
- ScrollPanel custom scrollbars
- DataTable hover states
- Overlay transparency
- TabView panel backgrounds

## 📁 **File Structure**

```
projects/theme/src/lib/
├── presets/
│   └── saga-blue-preset.ts      # Main theme preset
├── styles/
│   └── saga-blue-layers.css     # CSS layers and custom styles
├── theme.ts                     # Theme exports
└── public-api.ts               # Public API
```

## 🔧 **Customization**

### Extending the Theme

```typescript
import { definePreset } from '@primeuix/themes';
import SagaBluePreset from '@ng-p20-kit/theme';

const CustomPreset = definePreset(SagaBluePreset, {
  semantic: {
    primary: {
      500: '#your-custom-color'
    }
  }
});
```

### Adding Custom Styles

```css
/* In your component styles */
@layer components {
  .my-custom-component {
    background-color: var(--primary-color);
    color: var(--primary-color-text);
  }
}
```

## 🧪 **Testing**

### Build Test
```bash
npm run build-showcase
```

### Development Server
```bash
npm start
```

### Documentation
```bash
npm run docs:build:showcase
```

## 📚 **Migration Guide**

### From PrimeNG 17 to 20

1. **Replace theme imports**:
   ```scss
   // Old (PrimeNG 17)
   @import 'primeng/resources/themes/saga-blue/theme.css';
   
   // New (PrimeNG 20)
   @import '@ng-p20-kit/theme/styles/saga-blue-layers.css';
   ```

2. **Update configuration**:
   ```typescript
   // Old
   import { providePrimeNG } from 'primeng/config';
   
   // New
   import { providePrimeNG } from 'primeng/config';
   import { SagaBluePreset } from '@ng-p20-kit/theme';
   ```

3. **Replace CSS variables**:
   ```scss
   // Old
   background-color: var(--primary-color);
   
   // New (same, but with updated values)
   background-color: var(--primary-color);
   ```

## 🐛 **Troubleshooting**

### Common Issues

1. **Build errors**: Ensure all dependencies are installed
2. **Style conflicts**: Check CSS layer order
3. **Color mismatches**: Verify token values

### Support

- Check the [PrimeNG 20 documentation](https://primeng.org/theming)
- Review the [Tailwind CSS integration guide](https://primeng.org/tailwind)
- Open an issue in the project repository

## 📄 **License**

This theme is part of the ng-p20-kit project and follows the same license terms.

---

**Built with ❤️ for the Pegasus migration project**