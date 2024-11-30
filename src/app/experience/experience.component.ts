import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-600 { animation-delay: 600ms; }
  `]
})
export class ExperienceComponent {
  experiences = [
    
    {
      title: 'Student Nurse',
      place: 'Karatina Hospital',
      date: '2023 - 2024',
      description: 'Managed patient care and health education programs.'
    },
    {
      title: 'Bachelor of Science in Nursing',
      place: 'Dedan Kimathi University of Technology',
      date: '2021 - 2025',
      description: 'Graduated with honors, specializing in critical care nursing.'
    }
  ];
}
