import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout.component';
import { createStepRoutes } from '@trial-step/step-routes.factory';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadComponent: () => import('@trial/trials-container.component').then(m => m.TrialsContainerComponent)
          },
          {
            path: ':id',
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
    redirectTo: '/dashboard'
  }
];
