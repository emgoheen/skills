import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CandidateService } from '@skills/candidates/data-access';
import { Candidate } from '@skills/candidates/model';
import { delay, of } from 'rxjs';
import { CandidateStore } from './candidate.store';
import { createSpyFromClass } from 'jest-auto-spies';

const mockCandidateData: Candidate[] = [
  {
    id: 'betty',
    name: 'Betty Rubble',
    photo: 'assets/betty.jpg',
    title: 'Rock Polisher',
  },
  {
    id: 'wilma',
    name: 'Wilma Flintstone',
    photo: 'assets/wilma.jpg',
    title: 'Quarry Manager',
  },
];
describe('CandidateStore', () => {
  function setup() {
    const mockCandidateService = createSpyFromClass(CandidateService);
    mockCandidateService.getCandidates.mockReturnValue(of(mockCandidateData).pipe(delay(100)));

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
    expect(store.candidates()).toHaveLength(mockCandidateData.length);
    expect(store.candidates()).toEqual(mockCandidateData);
    expect(store.isLoading()).toBe(false);
  }));
});
