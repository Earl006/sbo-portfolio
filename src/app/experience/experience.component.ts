// experience.component.ts
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface ExperienceItem {
  title: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'education' | 'work';
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  providers: [DatePipe],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor(private datePipe: DatePipe) {}

  experiences: ExperienceItem[] = [
    {
      title: 'Masters of Arts in Journalism and Mass Communication',
      place: 'Chuka University',
      startDate: '2021-09',
      endDate: '2024-11',
      description: [
        'Completed comprehensive research on media studies',
        'Thesis: "Audience Perceptions of Gender Stereotypes in Selected Commercial Advertisements on Citizen Television, Kenya"',
        'Presented research papers at academic conferences'
      ],
      type: 'education'
    },
    {
      title: 'Content Creator',
      place: 'Mercy Corps',
      startDate: '2023-04',
      endDate: '2023-08',
      description: [
        'Created and edited videos for social media platforms',
        'Developed engaging content strategies',
        'Managed social media accounts and engagement'
      ],
      type: 'work'
    },
    {
      title: 'Communication Intern',
      place: 'Sunday Express',
      startDate: '2022-06',
      endDate: '2022-12',
      description: [
        'Assisted in content creation and editing',
        'Conducted research for news articles',
        'Participated in editorial meetings'
      ],
      type: 'work'
    },
    {
      title: 'Intern',
      place: 'Department of Film Services',
      startDate: '2021-05',
      endDate: '2021-08',
      description: [
        'Assisted in film production and editing',
        'Learned video editing software and techniques',
        'Collaborated with production teams'
      ],
      type: 'work'
    },
    {
      title: 'Communication Intern',
      place: 'The Standard Media Group',
      startDate: '2019-05',
      endDate: '2019-08',
      description: [
        'Gained hands-on experience in media production',
        'Assisted in news gathering and reporting',
        'Developed multimedia content'
      ],
      type: 'work'
    },
    {
      title: 'Bachelor of Arts in Journalism and Mass Communication',
      place: 'Chuka University',
      startDate: '2015-09',
      endDate: '2019-12',
      description: [
        'Comprehensive undergraduate program in media studies',
        'Developed strong journalism and communication skills',
        'Participated in various academic and professional development activities'
      ],
      type: 'education'
    },
    {
      title: 'Short Course in Film and TV Production',
      place: 'Africa Film And Television Talent Training Institute',
      startDate: '2017-05',
      endDate: '2017-08',
      description: [
        'Intensive training in film and television production techniques',
        'Gained practical skills in media production',
        'Expanded understanding of media industry practices'
      ],
      type: 'education'
    },
    {
      title: 'Kenya Certificate of Secondary Education (KCSE)',
      place: 'St. Joseph\'s Girl\'s High School',
      startDate: '2011',
      endDate:'2014',
      description: [
        'Completed secondary education',
        'Developed foundational academic and personal skills'
      ],
      type: 'education'
    },
    {
      title: 'Kenya Certificate of Primary Education (KCPE)',
      place: 'Ortum Girl\'s Boarding Primary School',
      startDate: '2002',
      endDate: '2010',
      description: [
        'Completed primary education',
        'Established strong educational foundation'
      ],
      type: 'education'
    }
  
  ];

  sortedExperiences: ExperienceItem[] = [];

  ngOnInit() {
    this.sortedExperiences = [...this.experiences].sort((a, b) => {
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    });
  }

  getFormattedDateRange(exp: ExperienceItem): string {
    const startDate = new Date(exp.startDate);
    const endDate = new Date(exp.endDate);
    return `${startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - 
            ${endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
  }
  private extractYear(dateString: string): number {
    return parseInt(dateString.split('-')[0]);
  }
  formatDateRange(dateString: string): string {
    // Handle different date format variations
    const parts = dateString.split('-');
    
    if (parts.length === 1) {
      // Just a year
      return parts[0];
    }

    if (parts.length === 2) {
      // Year and month or start-end years
      if (parts[0].length === 4 && parts[1].length === 2) {
        // Convert YYYY-MM to a formatted date
        try {
          const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1);
          return this.datePipe.transform(date, 'MMM yyyy') || dateString;
        } catch {
          return dateString;
        }
      }
      // If it's a year range
      return `${parts[0]} - ${parts[1]}`;
    }

    // If more complex, return as is
    return dateString;
  }
}