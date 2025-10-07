import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout.component';
import { DashboardComponent } from './core/dashboard.component';

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
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
