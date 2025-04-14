import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CandidateContent } from '@skills/candidate-content-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateContentService {
  private readonly candidateContentUrl =
    './candidate-content/candidate-content.json';
  private readonly httpClient = inject(HttpClient);

  // Comment here to force a change in this file
  getCandidateContent(): Observable<CandidateContent[]> {
    return this.httpClient.get<CandidateContent[]>(this.candidateContentUrl);
  }
}
