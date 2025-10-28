import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter, withComponentInputBinding, withRouterConfig} from '@angular/router';
import {routes} from '@ng-p20-kit/showcase/app/app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {providePrimeNG} from 'primeng/config';
import {SagaBluePreset} from '@ng-p20-kit/theme';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { trialStepFeature } from '@trial-step/trial-step.reducer';
import { TrialStepEffects } from '@trial-step/trial-step.effects';
import { countriesProviders } from '@country/country.settings';
import {dateProviders} from '@core/date.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * keep for PrimeNG 20 (deprecated but required today)
     */
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withRouterConfig({paramsInheritanceStrategy: 'always'})),
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
    }),
    /**
     * Step Routing Configuration
     * Provides step routing configuration for trial navigation
     * Uses centralized route constants for consistency
     */
    provideStore({
      [trialStepFeature.name]: trialStepFeature.reducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideRouterStore(),
    provideEffects([TrialStepEffects]),
    ...dateProviders,
    ...countriesProviders
]
};
