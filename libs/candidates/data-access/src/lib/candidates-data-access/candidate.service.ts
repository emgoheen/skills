import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '@skills/candidates/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private readonly candidateInfoUrl = './candidates/candidates.json';
  private readonly httpClient = inject(HttpClient);

  getCandidates(): Observable<Candidate[]>{
    return this.httpClient.get<Candidate[]>(this.candidateInfoUrl);
  }
}