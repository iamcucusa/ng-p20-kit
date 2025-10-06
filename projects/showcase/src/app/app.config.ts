import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from '@ng-p20-kit/showcase/app/app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {providePrimeNG} from 'primeng/config';
import {MyPreset} from '@ng-p20-kit/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), // keep for PrimeNG 20 (deprecated but required today)
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({ theme: { preset: MyPreset, options: { cssLayer: { name:'primeng', order:'app,primeng' }}}})
  ]
};
