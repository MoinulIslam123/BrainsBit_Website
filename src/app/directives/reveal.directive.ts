import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type RevealType = 'up' | 'left' | 'right' | 'scale' | 'fade' | '';

/**
 * Fades (and slides / scales) an element in as it scrolls into view.
 *
 *   <div appReveal="up" [revealDelay]="120">...</div>
 *
 * - Items already on screen at load are left alone, so nothing flashes.
 * - The animation classes are removed afterwards, so the element's own
 *   hover transitions keep working.
 * - Server-rendered HTML is fully visible (no hidden content without JS).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') type: RevealType = 'up';
  /** Stagger delay in milliseconds */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const host = this.el.nativeElement;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    // Already on screen at load: don't hide it
    if (host.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const type = this.type === '' ? 'up' : this.type;
    const classes = ['reveal'];
    if (type !== 'fade') classes.push(`reveal-${type}`);
    host.classList.add(...classes);
    host.style.transitionDelay = `${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          host.classList.add('in');
          this.observer?.unobserve(host);
          // hand the element back to its normal styles once the animation is done
          this.timer = setTimeout(
            () => {
              host.classList.remove(...classes, 'in');
              host.style.transitionDelay = '';
            },
            850 + this.revealDelay + 60,
          );
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.timer) clearTimeout(this.timer);
  }
}
