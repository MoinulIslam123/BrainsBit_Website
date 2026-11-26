import { DOCUMENT } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { COMPANY } from '../../../config/company.config';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-floating-actions',
  standalone: true,
  templateUrl: './floating-actions.component.html',
  styleUrl: './floating-actions.component.css',
})
export class FloatingActionsComponent {
  private doc = inject(DOCUMENT);
  private scroll = inject(ScrollService);

  company = COMPANY;

  // back-to-top button appears after the first screen
  visible = computed(() => this.scroll.y() > 480);

  // progress ring around the back-to-top button
  readonly circumference = 2 * Math.PI * 22;
  dashOffset = computed(
    () => this.circumference * (1 - this.scroll.progress() / 100),
  );

  toTop() {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
