import { Routes } from '@angular/router';
import { LayoutComponent } from '@core/layout.component';
import { DashboardComponent } from '@core/dashboard.component';

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
        component: DashboardComponent
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
