import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';

export type SceneKind = 'custom' | 'web' | 'mobile' | 'qa';

interface Seg {
  t: string;
  c?: string;
}

@Component({
  selector: 'app-service-scene',
  standalone: true,
  imports: [NgClass, InViewDirective],
  templateUrl: './service-scene.component.html',
  styleUrl: './service-scene.component.css',
})
export class ServiceSceneComponent {
  @Input() kind: SceneKind = 'custom';

  // --- custom software: a code editor ---
  codeLines: Seg[][] = [
    [{ t: '@Injectable', c: 'text-[#c8a2ff]' }, { t: '({ providedIn: ' }, { t: "'root'", c: 'text-[#ffcf7a]' }, { t: ' })' }],
    [{ t: 'export class ', c: 'text-[#7cc4ff]' }, { t: 'OrderService', c: 'text-[#7ee2b8]' }, { t: ' {' }],
    [{ t: '  private api = ' }, { t: 'inject', c: 'text-[#7ee2b8]' }, { t: '(HttpClient);' }],
    [{ t: ' ' }],
    [{ t: '  async ', c: 'text-[#7cc4ff]' }, { t: 'place', c: 'text-[#7ee2b8]' }, { t: '(o: Order) {' }],
    [{ t: '    const ', c: 'text-[#7cc4ff]' }, { t: 'r = ' }, { t: 'await ', c: 'text-[#7cc4ff]' }, { t: 'this.api.post(' }, { t: "'/orders'", c: 'text-[#ffcf7a]' }, { t: ', o);' }],
    [{ t: '    return ', c: 'text-[#7cc4ff]' }, { t: 'r.status === 201;' }],
    [{ t: '  }' }],
    [{ t: '}' }],
  ];

  // --- quality assurance: a test run ---
  tests = [
    'Sign in with valid credentials',
    'Add item to the cart',
    'Checkout on a mobile viewport',
    'API returns 201 on create',
    'Search handles empty results',
    'Payment form validation',
  ];
}
