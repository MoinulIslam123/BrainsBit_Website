import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SERVICES } from '../../../data/services.data';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ServiceBlockComponent } from '../../shared/service-block/service-block.component';
import { EngagementModelComponent } from '../../shared/engagement-model/engagement-model.component';
import { CallUsComponent } from '../../shared/call-us/call-us.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    ServiceBlockComponent,
    EngagementModelComponent,
    CallUsComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = SERVICES;

  intro =
    'We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.';
}
