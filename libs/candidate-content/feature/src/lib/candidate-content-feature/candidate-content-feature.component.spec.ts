import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateContentFeatureComponent } from './candidate-content-feature.component';

describe('CandidateContentFeatureComponent', () => {
  let component: CandidateContentFeatureComponent;
  let fixture: ComponentFixture<CandidateContentFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateContentFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateContentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
