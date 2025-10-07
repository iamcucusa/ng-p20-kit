import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from '@ng-p20-kit/showcase/app/app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {providePrimeNG} from 'primeng/config';
import {SagaBluePreset} from '@ng-p20-kit/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * keep for PrimeNG 20 (deprecated but required today)
     */
    provideAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
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
