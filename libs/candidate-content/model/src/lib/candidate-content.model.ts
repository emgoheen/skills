export interface CandidateContent {
  id: string;
  technologies: [
    {
      category: string;
      items: string[];
    },
  ];
  degrees: [
    {
      university: string;
      degree: number;
      major: string;
      startDate: Date;
      endDate: Date;
    },
  ];
  jobs: [
    {
      company: string;
      city: string;
      title: string;
      startDate: Date;
      endDate?: Date;
      duties: string[];
    },
  ];
}
