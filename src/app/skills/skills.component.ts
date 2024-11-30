import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
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
    { 
      name: 'Microsoft Office Suite', 
      description: 'Proficient in Word, PowerPoint, and Excel for professional documentation and presentations' 
    },
    { 
      name: 'Technical Adaptability', 
      description: 'Extremely comfortable learning and working with new technologies quickly and efficiently' 
    },
    { 
      name: 'Communication', 
      description: 'Excellent written and verbal communication skills with strong interpersonal abilities' 
    },
    { 
      name: 'Research & Analysis', 
      description: 'Skilled in conducting comprehensive research, data analysis, and developing insightful perspectives' 
    },
    { 
      name: 'Organizational Skills', 
      description: 'Highly organized, motivated, and adept at managing multiple tasks with precision' 
    },
    { 
      name: 'Media & Marketing', 
      description: 'Experienced in social media marketing, content creation, and brand communication strategies' 
    }
  ];
}