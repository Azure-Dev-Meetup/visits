import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './core';
import { VisitListComponent } from './visits/visit-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'visits' },
  {
    path: 'visits',
    loadChildren: () =>
      import('./visits/visits.module').then((m) => m.VisitsModule),
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
