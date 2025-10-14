import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout.component';

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
        loadComponent: () => import('./trial/trials-container.component').then(m => m.TrialsContainerComponent)
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
