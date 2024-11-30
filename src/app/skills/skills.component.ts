import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-600 { animation-delay: 600ms; }
  `]
})
export class SkillsComponent {
  skills = [
    { name: 'Critical Care', description: 'Specialized in managing critically ill patients in ICU settings.' },
    { name: 'Patient Education', description: 'Experienced in providing comprehensive health education to patients and families.' },
    { name: 'Medication Administration', description: 'Proficient in safe and accurate medication administration and management.' },
    { name: 'Emergency Response', description: 'Trained in rapid response and emergency situations.' },
    { name: 'Electronic Health Records', description: 'Skilled in using various EHR systems for accurate documentation.' },
    { name: 'Team Leadership', description: 'Experienced in leading nursing teams and coordinating patient care.' }
  ];
}
