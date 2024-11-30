import { Component } from '@angular/core';

// about.component.ts
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  isExpanded = false;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}