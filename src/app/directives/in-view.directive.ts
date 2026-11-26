import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';

/**
 * Starts the CSS animations inside an element only once it is on screen
 * (otherwise a scene far down the page would finish before anyone sees it).
 * The paused state is defined in styles.css (.scene:not(.in-view)).
 */
@Directive({
  selector: '[appInView]',
  standalone: true,
})
export class InViewDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.el.nativeElement.classList.add('scene');
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const host = this.el.nativeElement;

    if (!('IntersectionObserver' in window)) {
      host.classList.add('in-view');
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          host.classList.add('in-view');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
