// testimonials.component.ts (rename to projects.component.ts)
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileFilterPipe } from '../file-filter.pipe';

interface Project {
  name: string;
  type: 'pdf' | 'pptx';
  path: string;
  icon: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FileFilterPipe],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {
  projects: Project[] = [];

  ngOnInit() {
    this.projects = [
      // PDF files
      {
        name: 'Abstract: African Cultural Aspect',
        type: 'pdf',
        path: '/assets/ABSTRACT OF VEDIO ON AFRICAN CULTURAL ASPECT.pdf',
        icon: 'pdf'
      },
      {
        name: 'Abstract: Challenges Facing Society',
        type: 'pdf',
        path: '/assets/ABSTRACT OF VEDIO ON CHALLENGES FACING SOCIETY.pdf',
        icon: 'pdf'
      },
      {
        name: 'Abstract: Innovation',
        type: 'pdf',
        path: '/assets/ABSTRACT OF VEDIO ON INNOVATION.pdf',
        icon: 'pdf'
      },
      {
        name: 'Autobiography Essay',
        type: 'pdf',
        path: '/assets/AUTOBIOGRAPHY ESSAY.pdf',
        icon: 'pdf'
      },
      {
        name: 'Photographic Essay',
        type: 'pdf',
        path: '/assets/PHOTOCGRAPHIC ESSAY.pdf',
        icon: 'pdf'
      },
      // PPTX files
      {
        name: 'African Culture Presentation',
        type: 'pptx',
        path: '/assets/docs/AFRICAN CULTURE POWERPOINT.pptx',
        icon: 'pptx'
      },
      {
        name: 'Autobiography Essay Presentation',
        type: 'pptx',
        path: '/assets/docs/AUTOBIOGRAPHY ESSAY POWERPOINT.pptx',
        icon: 'pptx'
      },
      {
        name: 'Innovation Presentation',
        type: 'pptx',
        path: '/assets/docs/INNOVATION POWERPOINT.pptx',
        icon: 'pptx'
      },
      {
        name: 'Professional Relevant Platforms',
        type: 'pptx',
        path: '/assets/docs/PROFFESIONAL RELEVANT PLATFORMS.pptx',
        icon: 'pptx'
      }
    ];
  }

  previewFile(project: Project) {
    if (project.type === 'pdf') {
      window.open(project.path, '_blank');
    } else {
      // For PPTX, trigger download as preview isn't supported
      this.downloadFile(project);
    }
  }

  downloadFile(project: Project) {
    const link = document.createElement('a');
    link.href = project.path;
    link.download = project.name + '.' + project.type;
    link.click();
  }
}