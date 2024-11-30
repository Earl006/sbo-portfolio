import { Component } from '@angular/core';
import { DarkModeToggleComponent } from '../dark-mode/dark-mode.component';

// header.component.ts
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DarkModeToggleComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
