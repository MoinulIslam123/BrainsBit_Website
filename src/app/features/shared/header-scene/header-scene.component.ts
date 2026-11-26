import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';
import { SERVICES } from '../../../data/services.data';
import { SceneKind, ServiceSceneComponent } from '../service-scene/service-scene.component';

export type HeaderSceneKind = SceneKind | 'services' | 'about' | 'careers' | 'contact';

@Component({
  selector: 'app-header-scene',
  standalone: true,
  imports: [NgClass, InViewDirective, ServiceSceneComponent],
  templateUrl: './header-scene.component.html',
  styleUrl: './header-scene.component.css',
})
export class HeaderSceneComponent {
  @Input() kind: HeaderSceneKind = 'services';

  services = SERVICES;

  isServiceScene(): boolean {
    return ['custom', 'web', 'mobile', 'qa'].includes(this.kind);
  }

  // about: the values that orbit the logo mark
  orbit = [
    { icon: 'fa-rocket', label: 'Kick start' },
    { icon: 'fa-user-gear', label: 'Top engineers' },
    { icon: 'fa-diagram-project', label: 'End to end' },
    { icon: 'fa-chart-line', label: 'Efficiency' },
  ];

  // careers: stacked job cards
  jobs = [
    { title: 'Software Engineer', meta: 'Dhaka · Engineering' },
    { title: 'Project Manager', meta: 'Dhaka · Engineering' },
    { title: 'Operations Manager', meta: 'Dhaka · Sales' },
  ];
}
