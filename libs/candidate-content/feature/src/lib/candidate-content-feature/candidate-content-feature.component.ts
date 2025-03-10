import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-candidate-content-feature',
  imports: [CommonModule],
  templateUrl: './candidate-content-feature.component.html',
  styleUrl: './candidate-content-feature.component.scss',
})
export class CandidateContentFeatureComponent implements OnInit {
  candidateId: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.candidateId = params['id'];
    });
  }
}
