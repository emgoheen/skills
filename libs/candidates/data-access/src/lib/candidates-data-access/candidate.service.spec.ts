import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CandidateService } from './candidate.service';
import { createSpyFromClass } from 'jest-auto-spies';
import { CANDIDATE_DATA_MOCK } from './mocks/candidate-service-mock-data';
import { subscribeSpyTo } from '@hirez_io/observer-spy';

describe('CandidateService', () => {
  function setup() {
    const mockHttpClient = createSpyFromClass(HttpClient);
    mockHttpClient.get.nextOneTimeWith(CANDIDATE_DATA_MOCK);

    TestBed.configureTestingModule({
      providers: [
        CandidateService,
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
      ],
    });

    const candidateService = TestBed.inject(CandidateService);

    return { candidateService };
  }
  it('should return the correct candidate data', () => {
    const { candidateService } = setup();
    const candidates = subscribeSpyTo(
      candidateService.getCandidates()
    ).getLastValue();
    expect(candidates).toEqual(CANDIDATE_DATA_MOCK);
  });
});
