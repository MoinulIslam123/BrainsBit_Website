import { RevealDirective } from '../../../directives/reveal.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

interface Model {
  icon: string;
  title: string;
  text: string;
  bestFor: string;
}

@Component({
  selector: 'app-engagement-model',
  standalone: true,
  imports: [RevealDirective, CommonModule, RouterLink, SectionHeadingComponent],
  templateUrl: './engagement-model.component.html',
  styleUrl: './engagement-model.component.css',
})
export class EngagementModelComponent {
  intro =
    "Customers are our key stakeholders. We focus and value the priorities of our clients' needs as their extended team. Based on the requirements we are able to provide a complete plan and dedicated engineers to complete the project. We are highly flexible in customizing our engagement model to satisfy client demands.";

  models: Model[] = [
    {
      icon: 'fa-users',
      title: 'Full time engagement model',
      text: 'For ongoing projects and continuous flow of work, we assign dedicated engineers for working exclusively on your projects. The team size can be augmented based on your workload and skill requirements. Weekly timesheets and status reports are submitted for your monitoring and review.',
      bestFor: 'Ongoing projects and a continuous flow of work',
    },
    {
      icon: 'fa-bullseye',
      title: 'Project based model',
      text: 'For fixed scope projects, we provide time and cost estimates after thoroughly analyzing your requirements. A detailed project plan is prepared for you to have a firm understanding of delivery milestones, time, and budget. The necessary resources are assigned based on the time and complexity requirements of the project. We are fully committed to quality deliverables and meeting all deadlines.',
      bestFor: 'Fixed scope projects with clear milestones',
    },
  ];
}
