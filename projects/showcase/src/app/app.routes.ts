import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout.component';
import { createStepRoutes } from '@trial-step/step-routes.factory';
import { appRoutes } from '@core/route.constants';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: `/${appRoutes.dashboard}`,
        pathMatch: 'full'
      },
      {
        path: appRoutes.dashboard,
        children: [
          {
            path: '',
            loadComponent: () => import('@trial/trials-container.component').then(m => m.TrialsContainerComponent)
          },
          {
            path: `:${appRoutes.trialIdParam}`,
            loadComponent: () => import('@trial/trial-container.component').then(m => m.TrialContainerComponent),
            children: createStepRoutes()
          }
        ]
      },
      {
        path: 'theme',
        loadComponent: () => import('@theme-demo/theme-demo-container.component').then(m => m.ThemeDemoContainerComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: `/${appRoutes.dashboard}`
  }
];