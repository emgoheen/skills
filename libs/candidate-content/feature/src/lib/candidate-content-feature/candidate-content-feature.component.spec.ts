import { render, screen } from '@testing-library/angular';
import { CandidateContentFeatureComponent } from './candidate-content-feature.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CandidateContentFeatureComponent', () => {
  async function setup(mockParams: Record<string, string> = {}) {
    const { fixture, container } = await render(
      CandidateContentFeatureComponent,
      {
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              params: of(mockParams),
            },
          },
        ],
      },
    );

    const component = fixture.componentInstance;
    return { component, fixture, container };
  }

  describe('CandidateContentFeatureComponent', () => {
    it('should create the component', async () => {
      const { component } = await setup();
      expect(component).toBeTruthy();
    });

    it('should display the candidateId from the route params', async () => {
      const mockParams = { id: '12345' };
      await setup(mockParams);

      // Check if the candidateId is displayed in the text content
      expect(
        screen.getByText(
          /Candidate content for 12345 will be displayed here\./,
        ),
      ).toBeTruthy();
    });
  });
});
