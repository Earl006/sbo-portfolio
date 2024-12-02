// testimonials.component.ts (rename to projects.component.ts)
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileFilterPipe } from '../file-filter.pipe';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

interface Project {
  name: string;
  type: 'pdf' | 'pptx' | 'video';
  path?: string;
  icon?: string;
  thumbnail?: string;
  videoUrl?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FileFilterPipe, SafeUrlPipe],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent implements OnInit {
  projects: Project[] = [];
  selectedVideo: Project | null = null;

  ngOnInit() {
    this.projects = [
      // Video files
      // Video projects
      {
        name: 'Campus Antics',
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/gQTPdpPSZpk/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/gQTPdpPSZpk?si=t1KyikPzif4uKgre', // Replace with your video URL
      },
      // PDF files
      {
        name: 'FHSS Conference ABSTRACT',
        type: 'pdf',
        path: '/assets/FHSS Conference ABSTRACT.pdf',
        icon: 'pdf'
      },
      {
        name: 'AUDIENCE PERCEPTIONS OF GENDER STEREOTYPES IN SELECTED COMMERCIAL ADVERTISEMENTS ON CITIZEN TELEVISION, KENYA',
        type: 'pdf',
        path: '/assets/AUDIENCE PERCEPTIONS OF GENDER STEREOTYPES IN SELECTED COMMERCIAL ADVERTISEMENTS ON CITIZEN TELEVISION, KENYA.pdf',
        icon: 'pdf'
      },
      
      // PPTX files
      {
        name: 'KEMUNTO OKEMWA Final Graduate Defense 2024',
        type: 'pptx',
        path: '/assets/docs/KEMUNTO OKEMWA Final Graduate Defense 2024.pptx',
        icon: 'pptx'
      },
      {
        name: 'OKEMWA KEMUNTO SABINA PRESENTATION',
        type: 'pptx',
        path: '/assets/docs/OKEMWA KEMUNTO SABINA PRESENTATION 1.pptx',
        icon: 'pptx'
      }
    ];
  }

  previewFile(project: Project) {
    if (project.type === 'pdf') {
      window.open(project.path, '_blank');
    } else if (project.type === 'video') {
      this.selectedVideo = project;
    } else {
      // For PPTX, trigger download as preview isn't supported
      this.downloadFile(project);
    }
  }

  downloadFile(project: Project) {
    if (!project.path) return;
    const link = document.createElement('a');
    link.href = project.path;
    link.download = project.name + '.' + project.type;
    link.click();
  }
  closeVideoModal() {
    this.selectedVideo = null;
  }
}