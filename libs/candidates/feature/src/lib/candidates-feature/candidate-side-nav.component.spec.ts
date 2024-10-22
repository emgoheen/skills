import { createSpyFromClass } from 'jest-auto-spies';
import { CandidateStore } from './candidate.store';
import { render, screen } from '@testing-library/angular';
import { CandidateService } from '@skills/candidates/data-access';
import { CandidateSideNavComponent } from './candidate-side-nav.component';
import { of } from 'rxjs';
import { mockCandidateData } from './mocks';

describe('CandidateSideNavComponent', () => {
  async function setup() {
    const mockCandidateService = createSpyFromClass(CandidateService);
    mockCandidateService.getCandidates.mockReturnValue(of(mockCandidateData));

    const mockCandidateStore = createSpyFromClass(CandidateStore, {
      methodsToSpyOn: ['fetchCandidates'],
    });

    const { container } = await render(CandidateSideNavComponent, {
      providers: [
        {
          provide: CandidateStore,
          useValue: mockCandidateStore,
        },
        {
          provide: CandidateService,
          useValue: mockCandidateService,
        },
      ],
    });

    mockCandidateStore.fetchCandidates();

    return {
      container,
      mockCandidateStore,
    };
  }

  it('will render the candidate names', async () => {
    const { mockCandidateStore } = await setup();
    const candidateName = screen.getByText(`Candidates`);
    expect(candidateName).toBeVisible();
    expect(mockCandidateStore.fetchCandidates).toHaveBeenCalled();
  });
});
