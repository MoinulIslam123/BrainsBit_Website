import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleLine } from '../../../data/services.data';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ServiceSceneComponent, SceneKind } from '../service-scene/service-scene.component';
import { StageComponent } from '../stage/stage.component';

@Component({
  selector: 'app-service-block',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective, StageComponent, ServiceSceneComponent],
  templateUrl: './service-block.component.html',
  styleUrl: './service-block.component.css',
})
export class ServiceBlockComponent {
  @Input() titleLines: TitleLine[] = [];
  @Input() text = '';
  @Input() scene: SceneKind = 'custom';
  @Input() imageSide: 'left' | 'right' = 'left';
  /** Optional "Learn more" link, e.g. ['/services', 'web-application-development'] */
  @Input() link?: string[];
  @Input() showTitle = true;

  get title(): string {
    return this.titleLines.map((l) => l.text).join(' ');
  }
}
