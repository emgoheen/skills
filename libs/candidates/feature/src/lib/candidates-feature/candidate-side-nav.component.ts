import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateStore } from './candidate.store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-candidate-side-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
  ],
  templateUrl: './candidate-side-nav.component.html',
  styleUrl: './candidate-side-nav.component.scss',
  providers: [CandidateStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateSideNavComponent {
  readonly store = inject(CandidateStore);
  readonly breakpointObs = inject(BreakpointObserver);
  readonly isSmallScreen = toSignal(
    this.breakpointObs
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((state) => state.matches)),
    { requireSync: true },
  );
}
