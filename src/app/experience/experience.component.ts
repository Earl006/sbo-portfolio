import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface ExperienceItem {
  title: string;
  place: string;
  date: string;
  description: string[];
  type: 'education' | 'experience';
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
 styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    // Professional Experiences
    {
      title: 'Intern',
      place: 'Mercy Corps',
      date: 'October 2023 - April 2024',
      description: [
        'Assisted in scheduling and coordinating meetings',
        'Helped maintain and organize records and databases',
        'Prepared reports, proposals, and presentations',
        'Gathered and analyzed performance and program data',
        'Provided administrative support and participated in professional development'
      ],
      type: 'experience'
    },
    {
      title: 'Credit Control Assistant',
      place: 'Firch International Limited',
      date: 'July 2022 - August 2023',
      description: [
        'Provided administrative support to finance team',
        'Monitored overdue accounts and tracked payments',
        'Updated customer databases and records',
        'Prepared statements and reports for company accountant',
        'Created and maintained payment procedures and policies'
      ],
      type: 'experience'
    },
    {
      title: 'Writer, Sales & Marketing Representative',
      place: 'Sunday Express Newspaper Limited',
      date: 'January 2021 - December 2021',
      description: [
        'Discussed priorities with producers and news managers',
        'Revised work to meet editor requirements',
        'Analyzed press releases for article inclusion',
        'Wrote and edited news stories',
        'Researched and analyzed news developments'
      ],
      type: 'experience'
    },
    {
      title: 'Public Information Intern',
      place: 'Kenya Private Sector Alliance',
      date: 'October - December 2019',
      description: [
        'Provided customer support via chat, email, and telephone',
        'Studied customer interactions and collected feedback',
        'Demonstrated knowledge of product lines and pricing',
        'Kept detailed transaction records',
        'Resolved customer issues and executed merchandising strategies'
      ],
      type: 'experience'
    },
    {
      title: 'Social Media Intern',
      place: 'The Standard Media Group',
      date: 'May to August 2019',
      description: [
        'Assisted with social media marketing initiatives',
        'Tracked social media campaigns',
        'Created content calendars',
        'Increased brand awareness through social platforms',
        'Supported marketing team at live and online events'
      ],
      type: 'experience'
    },
    {
      title: 'Communication Department Intern',
      place: 'Department of Film Services',
      date: 'April - June 2018',
      description: [
        'Worked in Production, Film Archive, and Lighting',
        'Performed voice-over narrations',
        'Assisted with video editing'
      ],
      type: 'experience'
    },

    // Education
    {
      title: 'Masters of Arts in Journalism and Mass Communication',
      place: 'Chuka University',
      date: '2021 - November 2024',
      description: [
        'Completed comprehensive research on media studies',
        'Thesis: "Audience Perceptions of Gender Stereotypes in Selected Commercial Advertisements on Citizen Television, Kenya"',
        'Presented research papers at academic conferences'
      ],
      type: 'education'
    },
    {
      title: 'Bachelor of Arts in Journalism and Mass Communication',
      place: 'Chuka University',
      date: '2015 - 2019',
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
      date: 'May to August 2017',
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
      date: '2011 - 2014',
      description: [
        'Completed secondary education',
        'Developed foundational academic and personal skills'
      ],
      type: 'education'
    },
    {
      title: 'Kenya Certificate of Primary Education (KCPE)',
      place: 'Ortum Girl\'s Boarding Primary School',
      date: '2010',
      description: [
        'Completed primary education',
        'Established strong educational foundation'
      ],
      type: 'education'
    }
  ];

  get sortedExperiences(): ExperienceItem[] {
    return this.experiences.sort((a, b) => {
      const yearA = parseInt(a.date.split('-')[0]);
      const yearB = parseInt(b.date.split('-')[0]);
      return yearB - yearA;
    });
  }
}