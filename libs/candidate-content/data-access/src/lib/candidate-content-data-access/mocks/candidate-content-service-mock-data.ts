import { CandidateContent } from '@skills/candidate-content-model';

export const CANDIDATE_CONTENT_DATA_MOCK: CandidateContent[] = [
  {
    id: 'betty',
    technologies: [
      {
        category: 'Crocheting',
        items: ['Afghan Making', 'Knick Knack Making', 'Scarf Making'],
      },
    ],
    degrees: [
      {
        university: 'Textile U',
        degree: 0,
        major: 'Weaving',
        startDate: new Date('2020-09-01T08:00:00.000-09:00'),
        endDate: new Date('2024-06-01T08:00:00.000-09:00'),
      },
    ],
    jobs: [
      {
        company: 'Etsy',
        city: 'Sacramento',
        title: 'Master Weaver',
        startDate: new Date('2024-09-01T08:00:00.000-09:00'),
        duties: [
          'Crocheting lap blankets for Warm Up America',
          'Crocheting blankets as gifts for family members',
          'Crocheting seasonal decorations as hostess gifts',
        ],
      },
    ],
  },
];
