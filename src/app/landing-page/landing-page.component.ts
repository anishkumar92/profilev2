import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  cursorStyle = { display: 'none', left: '0px', top: '0px' };

  animate(event: MouseEvent): void {
    this.cursorStyle.display = 'block'; // Show the spotlight
    this.cursorStyle.left = `${event.clientX}px`;
    this.cursorStyle.top = `${event.clientY}px`;
  }

  resetAnimation(event: MouseEvent): void {
    this.cursorStyle.display = 'none'; // Hide the spotlight
  }
  downloadCV(): void {
    window.location.href = './assets/resume.pdf';
  }
}
