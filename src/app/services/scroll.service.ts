import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, computed, signal } from '@angular/core';

/** One shared scroll listener for the navbar and the floating buttons. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly y = signal(0);
  readonly progress = signal(0); // 0 - 100
  readonly scrolled = computed(() => this.y() > 30);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    if (!isPlatformBrowser(platformId)) return;

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      this.y.set(y);
      this.progress.set(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }
}
