import { Route } from '@angular/router';

export enum AppRoutes {
  CANDIDATES_SIDE_NAV_ROUTE = 'home',
}
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: AppRoutes.CANDIDATES_SIDE_NAV_ROUTE,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.CANDIDATES_SIDE_NAV_ROUTE,
    loadComponent: () =>
      import('@skills/candidates/feature').then(
        (mod) => mod.CandidateSideNavComponent,
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.CANDIDATES_SIDE_NAV_ROUTE,
  },
];
