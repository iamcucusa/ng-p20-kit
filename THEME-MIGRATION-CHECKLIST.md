# ✅ Theme Migration Quick Checklist

Use this checklist during the actual migration process. Check off items as you complete them.

## Pre-Migration

- [ ] Backup pegasus repository (create branch: `backup/pre-theme-migration`)
- [ ] Review THEME-MIGRATION-PLAN.md thoroughly
- [ ] Ensure you have write access to pegasus repository
- [ ] Verify Node.js version (should be 22.x)
- [ ] Close any running dev servers

## Phase 1: Environment Preparation

### Dependencies Installation
- [ ] Run: `cd /Users/gracielafernandez/CLOUD/workspaces/BI/pegasus`
- [ ] Install production deps: `npm install --save-exact @primeuix/styles@^1.2.5 @primeuix/themes@^1.2.5 primeng@^20.2.0 tailwindcss-primeui@^0.6.1`
- [ ] Install dev deps: `npm install --save-dev tailwindcss@^4.1.14 @tailwindcss/postcss@^4.1.14 ng-packagr@^20.3.0 tsx@^4.20.6 postcss@^8.5.6 autoprefixer@^10.4.21`
- [ ] Verify: `npm list primeng @primeuix/themes tailwindcss`

### Library Project Creation
- [ ] Run: `ng generate library theme --prefix=pg --project-root=projects --skip-package-json=false`
- [ ] Verify `projects/theme/` directory exists
- [ ] Verify `angular.json` was updated

## Phase 2: File Migration

### Automated Migration
- [ ] Run migration script: `./migrate-theme.sh --dry-run` (review output)
- [ ] Run migration script: `./migrate-theme.sh` (execute)
- [ ] Verify all files copied to `projects/theme/`

### Manual File Updates
- [ ] Update `projects/theme/package.json` (name: `@pegasus/theme`)
- [ ] Update `projects/theme/tailwind.config.js` (content paths)
- [ ] Verify `projects/theme/ng-package.json` (dest path)
- [ ] Verify `projects/theme/tsconfig.lib.json` (extends path)
- [ ] Copy showcase utility SCSS (`projects/showcase/src/styles/*`) into the target repo (e.g., `projects/pegasus-ui/src/styles/kit-utilities/`)
- [ ] Create alias wrappers (e.g., `projects/pegasus-ui/src/app-styles/card.scss` forwarding to the real file)
- [ ] Replace deep relative imports in component SCSS with the new alias (`@use 'app-styles/...';`)

## Phase 3: Angular Configuration

### angular.json
- [ ] Add theme project configuration to `angular.json`
- [ ] Verify build configuration
- [ ] Verify test configuration

### TypeScript Paths
- [ ] Add `@pegasus/theme` path to `tsconfig.json`
- [ ] Add `@pegasus/theme/*` path to `tsconfig.json`
- [ ] Restart TypeScript server in IDE

### Style Aliases
- [ ] Add `stylePreprocessorOptions.includePaths` for `projects/theme/src/lib`, `projects/pegasus-ui/src/styles`, and `projects/pegasus-ui/src` (build + test targets)
- [ ] Confirm the alias you chose (e.g., `app-styles`) matches all SCSS imports

### NPM Scripts
- [ ] Add `build:theme` script
- [ ] Add `watch:theme` script
- [ ] Add `theme:generate` script
- [ ] Add `generate-spacing` script
- [ ] Add `generate-typography` script

## Phase 4: Tailwind CSS Integration

### PostCSS Configuration
- [ ] Create `postcss.config.js` in root
- [ ] Verify PostCSS plugins configuration

### Global Styles Update
- [ ] Backup original `projects/pegasus-ui/src/styles.scss`
- [ ] Remove PrimeNG 17 theme imports
- [ ] Remove `primeflex` import
- [ ] Add `@import 'tailwindcss'`
- [ ] Add `@import '@pegasus/theme/styles/saga-blue-layers.css'`
- [ ] Keep existing custom styles
- [ ] Verify no syntax errors

## Phase 5: PrimeNG 20 Configuration

### Application Bootstrap
- [ ] Create `projects/pegasus-ui/src/app/app.config.ts` (if using standalone)
- [ ] OR update `app.module.ts` (if using modules)
- [ ] Import `providePrimeNG` from `primeng/config`
- [ ] Import `SagaBluePreset` from `@pegasus/theme`
- [ ] Configure PrimeNG with theme preset
- [ ] Set CSS layer configuration

### Component Updates (if needed)
- [ ] Review PrimeNG component imports
- [ ] Update `p-dropdown` → `p-select` (if used)
- [ ] Update component APIs (if needed)
- [ ] Test component rendering

## Phase 6: Build & Verification

### Theme Library Build
- [ ] Run: `npm run build:theme`
- [ ] Verify `dist/theme/` directory created
- [ ] Check for build errors
- [ ] Verify type definitions generated

### Theme Asset Generation
- [ ] Run: `npm run theme:generate`
- [ ] Verify no generation errors
- [ ] Check CSS files updated

### Application Build
- [ ] Run: `npm run build`
- [ ] Verify no TypeScript errors
- [ ] Verify no missing dependencies
- [ ] Check bundle size (should be reasonable)
- [ ] Verify theme styles included

### Runtime Verification
- [ ] Run: `npm start`
- [ ] Open browser to application
- [ ] Check browser console (no errors)
- [ ] Verify PrimeNG components styled correctly
- [ ] Verify Tailwind utilities work
- [ ] Test dark mode (if implemented)

## Phase 7: Integration Testing

### Visual Testing
- [ ] Test all button variants
- [ ] Test input fields and focus states
- [ ] Test DataTable styling
- [ ] Test Select/Dropdown components
- [ ] Test modal/overlay components
- [ ] Test form styling
- [ ] Compare with PrimeNG 17 appearance

### Functional Testing
- [ ] Test all application pages
- [ ] Verify no broken functionality
- [ ] Test theme customization (if needed)
- [ ] Verify CSS layer order
- [ ] Test responsive design

### Performance Testing
- [ ] Check bundle size
- [ ] Measure initial load time
- [ ] Check runtime performance
- [ ] Verify no memory leaks

## Post-Migration Cleanup

### Dependency Cleanup
- [ ] Remove `primeflex` from package.json (if no longer needed)
- [ ] Remove PrimeNG 17 theme files (if any)
- [ ] Update package-lock.json

### Documentation
- [ ] Update README.md with theme usage
- [ ] Document theme customization process
- [ ] Create team migration guide
- [ ] Update component documentation

### Code Quality
- [ ] Run: `npm run lint`
- [ ] Fix all linting errors
- [ ] Fix TypeScript strict mode errors
- [ ] Update unit tests
- [ ] Add theme-related tests (if applicable)

## Final Verification

- [ ] All checklist items completed
- [ ] No build errors
- [ ] No runtime errors
- [ ] Visual parity achieved
- [ ] Performance acceptable
- [ ] Documentation updated
- [ ] Team notified of changes
- [ ] Git commit with descriptive message
- [ ] Create PR (if using Git workflow)

## Rollback Preparation

- [ ] Document rollback steps
- [ ] Test rollback procedure
- [ ] Keep backup branch available
- [ ] Document any breaking changes

---

## Quick Reference Commands

```bash
# Install dependencies
npm install --save-exact @primeuix/styles@^1.2.5 @primeuix/themes@^1.2.5 primeng@^20.2.0 tailwindcss-primeui@^0.6.1
npm install --save-dev tailwindcss@^4.1.14 @tailwindcss/postcss@^4.1.14 ng-packagr@^20.3.0 tsx@^4.20.6 postcss@^8.5.6 autoprefixer@^10.4.21

# Create library
ng generate library theme --prefix=pg --project-root=projects --skip-package-json=false

# Run migration script
./migrate-theme.sh --dry-run  # Review first
./migrate-theme.sh            # Execute

# Build and generate
npm run build:theme
npm run theme:generate
npm run build

# Development
npm start
```

---

**Notes Section** (use this space to document issues and solutions):


---

**Migration Date**: _______________  
**Migrated By**: _______________  
**Status**: ⬜ In Progress | ⬜ Completed | ⬜ Blocked

