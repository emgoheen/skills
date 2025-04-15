import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CandidateContentService } from './candidate-content.service';
import { createSpyFromClass } from 'jest-auto-spies';
import { CANDIDATE_CONTENT_DATA_MOCK } from './mocks/candidate-content-service-mock-data';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { of, throwError } from 'rxjs';

describe('CandidateContentService', () => {
  function setup() {
    const mockHttpClient = createSpyFromClass(HttpClient);

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

    return { candidateContentService, mockHttpClient };
  }

  // Only a change in the test file
  it('should return the correct candidate content data', () => {
    const { candidateContentService, mockHttpClient } = setup();
    mockHttpClient.get.mockReturnValue(of(CANDIDATE_CONTENT_DATA_MOCK));

    const candidateContent = subscribeSpyTo(
      candidateContentService.getCandidateContent(),
    ).getLastValue();

    expect(candidateContent).toEqual(CANDIDATE_CONTENT_DATA_MOCK);
    expect(mockHttpClient.get).toHaveBeenCalledWith(
      './candidate-content/candidate-content.json',
    );
  });

  it('should handle HTTP errors gracefully', () => {
    const { candidateContentService, mockHttpClient } = setup();
    const errorResponse = new Error('HTTP error');
    mockHttpClient.get.mockReturnValue(throwError(() => errorResponse));

    const capturedError = subscribeSpyTo(
      candidateContentService.getCandidateContent(),
      { expectErrors: true },
    ).getError();

    expect(capturedError).toBe(errorResponse);
    expect(mockHttpClient.get).toHaveBeenCalledWith(
      './candidate-content/candidate-content.json',
    );
  });
});
