import { RevealDirective } from '../../../directives/reveal.directive';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FeatureItem } from '../../../data/services.data';

@Component({
  selector: 'app-feature-grid',
  standalone: true,
  imports: [RevealDirective, CommonModule],
  templateUrl: './feature-grid.component.html',
  styleUrl: './feature-grid.component.css',
})
export class FeatureGridComponent {
  @Input() title = '';
  @Input() intro = '';
  @Input() items: FeatureItem[] = [];
  /** 'grid' for parallel benefits, 'steps' when the items are a real sequence */
  @Input() layout: 'grid' | 'steps' = 'grid';

  get thirds(): boolean {
    return this.items.length % 3 === 0;
  }
}
