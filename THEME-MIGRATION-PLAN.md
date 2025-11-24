# 🎨 Theme Library Migration Plan: ng-p20-kit → pegasus

## Executive Summary

This document provides a step-by-step plan to migrate the `projects/theme` library from the `ng-p20-kit` repository to the `pegasus` Angular 20 monorepo. The migration will enable the pegasus project to use the modern PrimeNG 20 token-based theming system with the saga-blue preset.

## 📋 Prerequisites Analysis

### Source Repository (ng-p20-kit)
- ✅ Angular 20.3.3
- ✅ PrimeNG 20.2.0
- ✅ Tailwind CSS 4.1.14
- ✅ TypeScript 5.9.2
- ✅ ng-packagr 20.3.0
- ✅ Standalone components architecture
- ✅ Modern build system (@angular/build)

### Target Repository (pegasus)
- ✅ Angular 20.3.13
- ⚠️ PrimeNG 17 (needs upgrade to 20.x)
- ❌ No Tailwind CSS (needs installation)
- ✅ TypeScript 5.9.3
- ❌ No library project structure (needs creation)
- ⚠️ Module-based architecture (can coexist with standalone)
- ✅ Modern build system (@angular/build)

### Key Dependencies Required in Target
```json
{
  "@primeuix/styles": "^1.2.5",
  "@primeuix/themes": "^1.2.5",
  "primeng": "^20.2.0",
  "tailwindcss": "^4.1.14",
  "@tailwindcss/postcss": "^4.1.14",
  "tailwindcss-primeui": "^0.6.1",
  "ng-packagr": "^20.3.0",
  "tsx": "^4.20.6"
}
```

---

## 🚀 Migration Steps

### Phase 1: Environment Preparation

#### Step 1.1: Install Required Dependencies
**Action**: Add all theme-related dependencies to pegasus `package.json`

```bash
cd /Users/gracielafernandez/CLOUD/workspaces/BI/pegasus
npm install --save-exact \
  @primeuix/styles@^1.2.5 \
  @primeuix/themes@^1.2.5 \
  primeng@^20.2.0 \
  tailwindcss-primeui@^0.6.1

npm install --save-dev \
  tailwindcss@^4.1.14 \
  @tailwindcss/postcss@^4.1.14 \
  ng-packagr@^20.3.0 \
  tsx@^4.20.6 \
  postcss@^8.5.6 \
  autoprefixer@^10.4.21
```

**Verification**:
```bash
npm list primeng @primeuix/themes tailwindcss
```

#### Step 1.2: Create Library Project Structure
**Action**: Use Angular CLI schematic to generate library project

```bash
cd /Users/gracielafernandez/CLOUD/workspaces/BI/pegasus
ng generate library theme \
  --prefix=pg \
  --project-root=projects \
  --skip-package-json=false
```

**Expected Output**:
- `projects/theme/` directory created
- `angular.json` updated with theme project configuration
- Basic library structure initialized

**Manual Adjustments Needed**:
1. Update `projects/theme/ng-package.json` to match source structure
2. Update `projects/theme/package.json` with correct peer dependencies
3. Configure TypeScript paths in root `tsconfig.json`
4. Plan for Sass aliases (`styles/*` for the theme and a second alias for local utilities) so migrations do not regress to brittle relative paths

---

### Phase 2: File Migration

#### Step 2.1: Copy Core Theme Files
**Action**: Copy all source files from ng-p20-kit to pegasus

**Files to Copy** (from `ng-p20-kit/projects/theme/`):

```
src/lib/
├── colors/
│   └── saga-blue-colors.ts          # ✅ Copy as-is
├── presets/
│   ├── saga-blue-preset.ts          # ✅ Copy as-is
│   └── mypreset.ts                  # ⚠️ Optional, review if needed
├── scripts/
│   ├── generate-spacing-scss.js     # ✅ Copy as-is
│   ├── generate-theme-assets.ts     # ✅ Copy as-is
│   └── generate-typography.js       # ✅ Copy as-is
├── styles/
│   ├── breakpoints.scss             # ✅ Copy as-is
│   ├── saga-blue-layers.css         # ✅ Copy as-is
│   ├── shadows.scss                 # ✅ Copy as-is
│   ├── tailwind-spacing.scss        # ✅ Copy as-is
│   ├── typography-usage.md          # ✅ Copy as-is
│   └── typography.scss              # ✅ Copy as-is
├── theme.spec.ts                    # ✅ Copy as-is
├── theme.ts                         # ✅ Copy as-is
└── public-api.ts                    # ✅ Copy as-is

Root files:
├── ng-package.json                  # ✅ Copy as-is
├── package.json                     # ⚠️ Update peer dependencies
├── README.md                        # ✅ Copy as-is
├── tailwind.config.js               # ⚠️ Update content paths
├── tsconfig.lib.json                # ✅ Copy as-is
├── tsconfig.lib.prod.json           # ✅ Copy as-is
└── tsconfig.spec.json                # ✅ Copy as-is
```

**Copy Command**:
```bash
# From ng-p20-kit root
SOURCE_DIR="/Users/gracielafernandez/CLOUD/workspaces/BI/Pegasus Migration/ng-p20-kit/projects/theme"
TARGET_DIR="/Users/gracielafernandez/CLOUD/workspaces/BI/pegasus/projects/theme"

# Copy entire src directory
cp -r "$SOURCE_DIR/src" "$TARGET_DIR/"

# Copy root configuration files
cp "$SOURCE_DIR/ng-package.json" "$TARGET_DIR/"
cp "$SOURCE_DIR/README.md" "$TARGET_DIR/"
cp "$SOURCE_DIR/tailwind.config.js" "$TARGET_DIR/"
cp "$SOURCE_DIR/tsconfig.lib.json" "$TARGET_DIR/"
cp "$SOURCE_DIR/tsconfig.lib.prod.json" "$TARGET_DIR/"
cp "$SOURCE_DIR/tsconfig.spec.json" "$TARGET_DIR/"
```

#### Step 2.2: Update Configuration Files

**File: `projects/theme/package.json`**
```json
{
  "name": "@pegasus/theme",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^20.3.0",
    "@angular/core": "^20.3.0"
  },
  "sideEffects": false,
  "devDependencies": {
    "tsx": "^4.20.6"
  }
}
```

**File: `projects/theme/tailwind.config.js`**
Update content paths to match pegasus structure:
```javascript
module.exports = {
  content: [
    './projects/pegasus-ui/**/*.{html,ts}',  // Updated path
    './projects/**/*.{html,ts,mdx}',
    './**/*.stories.@(ts|mdx)'
  ],
  // ... rest of config remains the same
};
```

**File: `projects/theme/ng-package.json`**
```json
{
  "$schema": "../../node_modules/ng-packagr/ng-package.schema.json",
  "dest": "../../dist/theme",
  "lib": {
    "entryFile": "src/public-api.ts"
  }
}
```

#### Step 2.3: Update TypeScript Configuration

**File: `tsconfig.json` (root)**
Add path alias for theme library:
```json
{
  "compilerOptions": {
    "paths": {
      "@pegasus/theme": ["./projects/theme/src/public-api.ts"],
      "@pegasus/theme/*": ["./projects/theme/src/lib/*"]
    }
  }
}
```

**File: `projects/theme/tsconfig.lib.json`**
Verify it extends root tsconfig correctly:
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../out-tsc/lib",
    "declaration": true,
    "declarationMap": true,
    "inlineSources": true,
    "sourceMap": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["**/*.spec.ts"]
}
```

#### Step 2.3: Copy Showcase Utility Styles (Local Alias)
**Action**: Preserve the reusable SCSS utilities that belong to the application (not the theme) so they can be referenced via an alias instead of `../../..` paths.

1. **Local utility source files**  
   Copy everything under `projects/showcase/src/styles/` into the target repo (recommended destination: `projects/pegasus-ui/src/styles/kit-utilities/` if you want to namespace them).
   ```bash
   # Example (feel free to adjust the destination folder name)
   rsync -av \
     "/Users/gracielafernandez/CLOUD/workspaces/BI/Pegasus Migration/ng-p20-kit/projects/showcase/src/styles/" \
     "/Users/gracielafernandez/CLOUD/workspaces/BI/pegasus/projects/pegasus-ui/src/styles/kit-utilities/"
   ```

2. **Alias wrappers**  
   Re-create the thin `@forward` shims (e.g., `card.scss`, `step-container.scss`, `assumptions-layout.scss`) inside a folder that will become your local alias root. In ng-p20-kit we use `projects/showcase/src/showcase/`. In the pegasus repo you can use `projects/pegasus-ui/src/app-styles/`:
   ```scss
   // projects/pegasus-ui/src/app-styles/card.scss
   @forward '../styles/kit-utilities/card.scss';
   ```
   These wrappers keep the import surface clean (`@use 'app-styles/card.scss';`) and make it easy to move the underlying files later.

3. **Update consuming SCSS files**  
   Replace any deep relative imports with the new alias. Example:
   ```scss
   // before
   @use '../../../../../styles/assumptions-layout.scss';
   // after
   @use 'app-styles/assumptions-layout.scss';
   ```
   (Rename `app-styles` to whatever matches your project naming; just stay consistent across the repo.)

---

### Phase 3: Angular Configuration

#### Step 3.1: Update angular.json
**Action**: Add theme library build configuration

**File: `angular.json`**
Add to `projects` section:
```json
{
  "projects": {
    "theme": {
      "projectType": "library",
      "root": "projects/theme",
      "sourceRoot": "projects/theme/src",
      "prefix": "pg",
      "architect": {
        "build": {
          "builder": "@angular/build:ng-packagr",
          "configurations": {
            "production": {
              "tsConfig": "projects/theme/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/theme/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {
            "tsConfig": "projects/theme/tsconfig.spec.json",
            "polyfills": ["zone.js", "zone.js/testing"]
          }
        }
      }
    }
  }
}
```

#### Step 3.2: Configure Sass Include Paths (Theme + App Utilities)
**Action**: Mirror the alias setup used in ng-p20-kit so `@use 'styles/...'` resolves to the theme library and `@use 'app-styles/...'` (or any alias you choose) resolves to the local utility wrappers.

Add `stylePreprocessorOptions` to both the **build** and **test** options for `pegasus-ui`:

```json
"stylePreprocessorOptions": {
  "includePaths": [
    "projects/theme/src/lib",             // exposes @use 'styles/...'
    "projects/pegasus-ui/src/styles",     // lets you reach app-level partials directly if needed
    "projects/pegasus-ui/src"             // exposes @use 'app-styles/...'
  ]
}
```

This ensures:
- Theme tokens live under the `styles/*` alias (identical to ng-p20-kit).
- App utilities (wrappers plus the real partials) live under a second alias (`app-styles/*` in the example).
- Future migrations simply re-point these include paths without touching every SCSS file.

#### Step 3.2: Add Build Scripts
**Action**: Add theme-related npm scripts to root `package.json`

```json
{
  "scripts": {
    "build:theme": "ng build theme",
    "watch:theme": "ng build theme --watch --configuration development",
    "theme:generate": "tsx projects/theme/src/lib/scripts/generate-theme-assets.ts",
    "generate-spacing": "node projects/theme/src/lib/scripts/generate-spacing-scss.js",
    "generate-typography": "node projects/theme/src/lib/scripts/generate-typography.js"
  }
}
```

---

### Phase 4: Tailwind CSS Integration

#### Step 4.1: Create PostCSS Configuration
**Action**: Create `postcss.config.js` in root directory

**File: `postcss.config.js`**
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
};
```

#### Step 4.2: Update Global Styles
**Action**: Migrate from PrimeNG 17 theme to PrimeNG 20 + Tailwind

**File: `projects/pegasus-ui/src/styles.scss`**
Replace existing PrimeNG 17 imports:
```scss
// OLD (PrimeNG 17)
// @import 'primeng/resources/themes/saga-blue/theme.css';
// @import "primeng/resources/primeng.css";
// @import 'primeflex/primeflex.scss';

// NEW (PrimeNG 20 + Tailwind)
@use 'tailwindcss';
@use '@pegasus/theme/styles/saga-blue-layers.css';
@use 'primeicons/primeicons.css';
@use 'assets/css/demo/flags.css';
@use 'app-styles/step-container.scss';
@use 'app-styles/card.scss';

// Keep existing custom styles
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

// ... rest of existing styles (now free to @use 'styles/...' and 'app-styles/...' anywhere)
```

#### Step 4.4: Update Component-Level SCSS Imports
**Action**: Replace any deep relative imports with the new aliases:

```scss
// Theme tokens
@use 'styles/typography.scss';

// App utilities
@use 'app-styles/assumptions-layout.scss';
```

#### Step 4.3: Configure Tailwind in Application
**Action**: Ensure Tailwind processes application files

The `tailwind.config.js` in `projects/theme/` should already include:
```javascript
content: [
  './projects/pegasus-ui/**/*.{html,ts}',  // Application files
  './projects/**/*.{html,ts,mdx}'
]
```

---

### Phase 5: PrimeNG 20 Configuration

#### Step 5.1: Update Application Bootstrap
**Action**: Configure PrimeNG 20 with theme preset

**File: `projects/pegasus-ui/src/app/app.module.ts`**
Add PrimeNG configuration (if using modules):
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import { SagaBluePreset } from '@pegasus/theme';

// If using standalone bootstrap, create app.config.ts instead
```

**OR Create: `projects/pegasus-ui/src/app/app.config.ts`** (recommended for Angular 20):
```typescript
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { SagaBluePreset } from '@pegasus/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: SagaBluePreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.app-dark',
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

**File: `projects/pegasus-ui/src/main.ts`** (if migrating to standalone):
```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
```

#### Step 5.2: Update Component Imports
**Action**: Update PrimeNG component imports from v17 to v20

**Common Changes**:
- `primeng/table` → `primeng/table` (same, but API changes)
- `primeng/dropdown` → `primeng/select` (renamed)
- `primeng/checkbox` → `primeng/checkbox` (same)
- Update component selectors: `p-dropdown` → `p-select`

**Migration Script** (optional):
```bash
# Find all PrimeNG imports
grep -r "from 'primeng/" projects/pegasus-ui/src/app

# Manual review and update required
```

---

### Phase 6: Build & Verification

#### Step 6.1: Build Theme Library
**Action**: Verify theme library builds successfully

```bash
cd /Users/gracielafernandez/CLOUD/workspaces/BI/pegasus
npm run build:theme
```

**Expected Output**:
- `dist/theme/` directory created
- Compiled library files
- Type definitions generated
- No build errors

#### Step 6.2: Generate Theme Assets
**Action**: Run theme generation script

```bash
npm run theme:generate
```

**Expected Output**:
- CSS layers updated
- Tailwind config validated
- No generation errors

#### Step 6.3: Build Application
**Action**: Build pegasus-ui with theme integration

```bash
npm run build
```

**Verification Checklist**:
- ✅ No TypeScript errors
- ✅ No missing dependency errors
- ✅ Theme styles included in build
- ✅ Tailwind classes processed
- ✅ PrimeNG components render correctly

#### Step 6.4: Runtime Verification
**Action**: Start development server and verify theme

```bash
npm start
```

**Visual Verification**:
- ✅ PrimeNG components use saga-blue colors
- ✅ Tailwind utilities work correctly
- ✅ CSS layers apply in correct order
- ✅ Dark mode selector works (if implemented)
- ✅ No console errors related to theme

---

### Phase 7: Integration Testing

#### Step 7.1: Component Migration Testing
**Action**: Test migrated PrimeNG components

**Test Cases**:
1. **Buttons**: Verify all button variants render correctly
2. **Inputs**: Check input styling and focus states
3. **DataTable**: Verify table headers and row hover
4. **Dropdowns/Selects**: Test new Select component
5. **Modals**: Check overlay and mask styling
6. **Forms**: Verify form field styling

#### Step 7.2: Theme Customization Testing
**Action**: Verify theme can be extended/customized

**Test**: Create custom preset extending SagaBluePreset
```typescript
import { definePreset } from '@primeuix/themes';
import { SagaBluePreset } from '@pegasus/theme';

const CustomPreset = definePreset(SagaBluePreset, {
  semantic: {
    primary: {
      500: '#custom-color'
    }
  }
});
```

#### Step 7.3: Performance Testing
**Action**: Verify build size and runtime performance

**Metrics to Check**:
- Bundle size (should be similar or smaller than PrimeNG 17)
- Initial load time
- Runtime theme application
- CSS layer performance

---

## 🔧 Troubleshooting Guide

### Common Issues & Solutions

#### Issue 1: "Cannot find module '@pegasus/theme'"
**Solution**:
1. Verify `tsconfig.json` paths configuration
2. Rebuild theme library: `npm run build:theme`
3. Restart TypeScript server in IDE

#### Issue 2: "Tailwind classes not working"
**Solution**:
1. Verify `tailwind.config.js` content paths include application files
2. Check `postcss.config.js` exists and is configured
3. Ensure `@import 'tailwindcss'` is in `styles.scss`
4. Rebuild application

#### Issue 3: "PrimeNG components not styled"
**Solution**:
1. Verify `providePrimeNG` is configured in app config
2. Check `saga-blue-layers.css` is imported
3. Verify CSS layer order in PrimeNG config
4. Check browser console for CSS layer warnings

#### Issue 4: "Build errors in theme library"
**Solution**:
1. Verify all dependencies are installed
2. Check TypeScript version compatibility
3. Review `tsconfig.lib.json` extends path
4. Check for circular dependencies

#### Issue 5: "Theme colors don't match PrimeNG 17"
**Solution**:
1. Run `npm run theme:generate` to regenerate assets
2. Verify `saga-blue-colors.ts` values
3. Check CSS variable names match PrimeNG 20 API
4. Clear browser cache and rebuild

---

## 📝 Post-Migration Checklist

### Immediate Actions
- [ ] Remove PrimeNG 17 theme imports from `styles.scss`
- [ ] Remove `primeflex` dependency (replaced by Tailwind)
- [ ] Update all PrimeNG component imports to v20
- [ ] Test all application pages for visual regressions
- [ ] Update CI/CD build scripts if needed

### Documentation Updates
- [ ] Update README with theme usage instructions
- [ ] Document theme customization process
- [ ] Create migration guide for team members
- [ ] Update component library documentation

### Code Quality
- [ ] Run linter: `npm run lint`
- [ ] Fix any TypeScript strict mode errors
- [ ] Update unit tests for PrimeNG 20 APIs
- [ ] Add theme-related tests if applicable

---

## 🎯 Success Criteria

The migration is considered successful when:

1. ✅ Theme library builds without errors
2. ✅ Application builds and runs successfully
3. ✅ All PrimeNG components render with saga-blue theme
4. ✅ Tailwind utilities work correctly
5. ✅ Visual parity with PrimeNG 17 saga-blue theme
6. ✅ No console errors or warnings
7. ✅ Performance metrics are acceptable
8. ✅ All existing functionality works as before

---

## 📚 Additional Resources

### Angular Schematics Used
- `ng generate library` - Creates library project structure
- No additional schematics needed (manual file copy)

### Key Documentation
- [PrimeNG 20 Theming Guide](https://primeng.org/theming)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Angular Library Guide](https://angular.io/guide/creating-libraries)
- [ng-packagr Documentation](https://github.com/ng-packagr/ng-packagr)

### Migration Timeline Estimate
- **Phase 1-2**: 2-3 hours (setup and file copy)
- **Phase 3-4**: 1-2 hours (configuration)
- **Phase 5**: 2-4 hours (PrimeNG integration)
- **Phase 6-7**: 3-5 hours (testing and verification)
- **Total**: 8-14 hours (depending on complexity and issues)

---

## 🔄 Rollback Plan

If migration fails, rollback steps:

1. **Revert Git Changes**:
   ```bash
   git checkout HEAD -- projects/theme/
   git checkout HEAD -- angular.json
   git checkout HEAD -- package.json
   git checkout HEAD -- tsconfig.json
   ```

2. **Restore Original Styles**:
   ```bash
   git checkout HEAD -- projects/pegasus-ui/src/styles.scss
   ```

3. **Reinstall Dependencies**:
   ```bash
   npm install
   ```

4. **Rebuild Application**:
   ```bash
   npm run build
   ```

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-27  
**Author**: Migration Analysis  
**Status**: Ready for Implementation

