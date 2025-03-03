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
      import('@skills/candidates-feature').then(
        (mod) => mod.CandidateSideNavComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@skills/candidate-content-feature').then(
            (mod) => mod.CandidateContentFeatureComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AppRoutes.CANDIDATES_SIDE_NAV_ROUTE,
  },
];
