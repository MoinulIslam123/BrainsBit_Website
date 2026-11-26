import { Routes } from '@angular/router';
import { AppLayoutComponent } from './features/shared/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
    ],
  },
  // Wildcard route to handle unknown paths
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
