import { Component } from '@angular/core';

/**
 * Decorative product composition for the hero: a web dashboard, a mobile app
 * and a QA status chip. Built from HTML/CSS (no images) and tilts with the pointer.
 */
@Component({
  selector: 'app-hero-showcase',
  standalone: true,
  templateUrl: './hero-showcase.component.html',
  styleUrl: './hero-showcase.component.css',
})
export class HeroShowcaseComponent {
  private x = 0;
  private y = 0;

  get transform(): string {
    return `perspective(1200px) rotateY(${this.x * 9}deg) rotateX(${-this.y * 9}deg)`;
  }

  onMove(e: PointerEvent) {
    if (e.pointerType !== 'mouse') return;
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    this.x = (e.clientX - r.left) / r.width - 0.5;
    this.y = (e.clientY - r.top) / r.height - 0.5;
  }

  onLeave() {
    this.x = 0;
    this.y = 0;
  }
}
