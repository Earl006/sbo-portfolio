import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: [`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-600 { animation-delay: 600ms; }
    .animation-delay-900 { animation-delay: 900ms; }
  `]
})
export class HomeComponent {
  openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeModal(event?: MouseEvent) {
    // Close only if clicking the backdrop
    if (!event || event.target === event.currentTarget) {
      const modal = document.getElementById('resumeModal');
      if (modal) {
        modal.classList.add('hidden');
      }
    }
  }
}
