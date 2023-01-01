import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
    <p>Angular standalone component</p>
  `,
})
export class HelloComponent {
}