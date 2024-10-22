import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateStore } from './candidate.store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'lib-candidate-side-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  templateUrl: './candidate-side-nav.component.html',
  styleUrl: './candidate-side-nav.component.scss',
  providers: [CandidateStore],
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
