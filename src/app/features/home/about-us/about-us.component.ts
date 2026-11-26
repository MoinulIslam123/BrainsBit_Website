import { Component } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';
import { FeatureItem } from '../../../data/services.data';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FeatureGridComponent } from '../../shared/feature-grid/feature-grid.component';
import { CallUsComponent } from '../../shared/call-us/call-us.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RevealDirective, PageHeaderComponent, FeatureGridComponent, CallUsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  benefits: FeatureItem[] = [
    {
      icon: 'fa-rocket',
      title: 'Kick start',
      text: 'Our teams can be ramped up quickly and managed autonomously to implement and execute agreed plans.',
    },
    {
      icon: 'fa-user-gear',
      title: 'Top quality engineers',
      text: 'Our hiring process is constantly active to ensure your access to the best IT professionals in the market.',
    },
    {
      icon: 'fa-diagram-project',
      title: 'End to end management',
      text: 'We are responsible for your project completion and team management from start to end, guaranteeing quality product output.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Operational efficiency',
      text: 'Our cost effective services help reduce your costs to remain competitive without compromising quality.',
    },
  ];
}
