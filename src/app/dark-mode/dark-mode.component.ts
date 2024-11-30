import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { CommonModule,NgIf } from '@angular/common';


@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode.component.html',
})
export class DarkModeToggleComponent {
  darkMode$ = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
