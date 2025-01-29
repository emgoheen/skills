import { inject } from '@angular/core';
import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { CandidateService } from '@skills/candidates-data-access';
import { Candidate } from '@skills/candidates-model';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap, tap, Observable } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { addEntities, withEntities } from '@ngrx/signals/entities';

type CandidateState = {
  candidates: Candidate[];
  isLoading: boolean;
};

const initialState: CandidateState = {
  candidates: [],
  isLoading: false,
};

export const CandidateStore = signalStore(
  withState(initialState),
  withEntities<Candidate>(),
  withMethods((state, candidateService = inject(CandidateService)) => ({
    fetchCandidates: rxMethod((trigger$: Observable<void>) =>
      trigger$.pipe(
        tap(() => patchState(state, { isLoading: true })),
        switchMap(() => {
          return candidateService.getCandidates().pipe(
            tapResponse({
              next: (candidates) =>
                patchState(state, addEntities(candidates), {
                  isLoading: false,
                }),
              error: (err) => {
                patchState(state, { isLoading: false });
                console.log(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
  withHooks({
    onInit(state) {
      state.fetchCandidates();
    },
  }),
);
