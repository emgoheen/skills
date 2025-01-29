import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CandidateContentService } from './candidate-content.service';
import { createSpyFromClass } from 'jest-auto-spies';
import { CANDIDATE_CONTENT_DATA_MOCK } from './mocks/candidate-content-service-mock-data';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
describe('CandidateContentService', () => {
  function setup() {
    const mockHttpClient = createSpyFromClass(HttpClient);
    mockHttpClient.get.nextOneTimeWith(CANDIDATE_CONTENT_DATA_MOCK);

    TestBed.configureTestingModule({
      providers: [
        CandidateContentService,
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
      ],
    });

    const candidateContentService = TestBed.inject(CandidateContentService);

    return { candidateContentService };
  }

  it('should return the correct candidate content data', () => {
    const { candidateContentService } = setup();
    const candidateContent = subscribeSpyTo(
      candidateContentService.getCandidateContent(),
    ).getLastValue();
    expect(candidateContent).toEqual(CANDIDATE_CONTENT_DATA_MOCK);
  });
});
