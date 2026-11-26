import { RevealDirective } from '../../../directives/reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [RevealDirective, CommonModule],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.css',
})
export class SectionHeadingComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() center = false;
}
