// @ts-check
const tseslint = require("typescript-eslint");
const angularEslint = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommended],
    plugins: {
      '@angular-eslint': angularEslint.tsPlugin,
      '@ngrx': require('@ngrx/eslint-plugin')
    },
    rules: {
      // Angular ESLint TypeScript rules
      ...angularEslint.configs.tsRecommended[1].rules,
      // NgRx ESLint Rules - Following official guide
      '@ngrx/avoid-dispatching-multiple-actions-sequentially': 'error',
      '@ngrx/avoid-mapping-selectors': 'error',
      '@ngrx/good-action-hygiene': 'error',
      '@ngrx/no-dispatch-in-effects': 'error',
      '@ngrx/no-effects-in-providers': 'error',
      '@ngrx/no-multiple-actions-in-effects': 'error',
      '@ngrx/no-reducer-in-key-names': 'error',
      '@ngrx/no-typed-global-store': 'error',
      '@ngrx/on-function-explicit-return-type': 'error',
      '@ngrx/prefer-action-creator-in-dispatch': 'error',
      '@ngrx/prefer-action-creator': 'error',
      '@ngrx/prefer-concat-latest-from': 'error',
      '@ngrx/use-consistent-global-store-name': 'error',
      '@ngrx/use-effects-lifecycle-interface': 'error'
    }
  },
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: angularEslint.templateParser
    },
    plugins: {
      '@angular-eslint/template': angularEslint.templatePlugin
    },
    rules: {
      ...angularEslint.configs.templateRecommended[1].rules
    }
  }
);