import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

/** A soft light that follows the cursor across a card (CSS lives in styles.css). */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
})
export class SpotlightDirective {
  @HostBinding('class.spotlight') readonly spotlight = true;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onMove(e: PointerEvent) {
    if (e.pointerType !== 'mouse') return;
    const r = this.el.nativeElement.getBoundingClientRect();
    this.el.nativeElement.style.setProperty('--x', `${e.clientX - r.left}px`);
    this.el.nativeElement.style.setProperty('--y', `${e.clientY - r.top}px`);
  }
}
