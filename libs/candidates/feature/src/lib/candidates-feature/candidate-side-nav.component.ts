import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateStore } from './candidate.store';

@Component({
  selector: 'lib-candidate-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './candidate-side-nav.component.html',
  styleUrl: './candidate-side-nav.component.scss',
  providers: [CandidateStore],
})
export class CandidateSideNavComponent {
  readonly store = inject(CandidateStore);
}
