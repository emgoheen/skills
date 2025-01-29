import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CandidateService } from '@skills/candidates-data-access';
import { delay, of } from 'rxjs';
import { CandidateStore } from './candidate.store';
import { createSpyFromClass } from 'jest-auto-spies';
import { mockCandidateData } from './mocks';

describe('CandidateStore', () => {
  function setup() {
    const mockCandidateService = createSpyFromClass(CandidateService);
    mockCandidateService.getCandidates.mockReturnValue(
      of(mockCandidateData).pipe(delay(100)),
    );

    TestBed.configureTestingModule({
      providers: [
        CandidateStore,
        {
          provide: CandidateService,
          useValue: mockCandidateService,
        },
      ],
    });

    const store = TestBed.inject(CandidateStore);
    return { store };
  }

  it('should load candidates', fakeAsync(() => {
    const { store } = setup();

    store.fetchCandidates();
    tick(50);
    expect(store.isLoading()).toBe(true);
    tick(50);
    expect(store.entities()).toHaveLength(mockCandidateData.length);
    expect(store.entities()).toEqual(mockCandidateData);
    expect(store.isLoading()).toBe(false);
  }));
});
