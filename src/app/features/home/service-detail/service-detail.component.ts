import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceItem, findService } from '../../../data/services.data';
import {
  SERVICE_DETAILS,
  ServiceDetail,
} from '../../../data/service-details.data';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FeatureGridComponent } from '../../shared/feature-grid/feature-grid.component';
import { EngagementModelComponent } from '../../shared/engagement-model/engagement-model.component';
import { CallUsComponent } from '../../shared/call-us/call-us.component';

/**
 * One page component for all four service pages.
 * The route's `data.slug` decides which service is shown.
 */
@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    FeatureGridComponent,
    EngagementModelComponent,
    CallUsComponent,
  ],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css',
})
export class ServiceDetailComponent implements OnInit {
  service!: ServiceItem;
  detail!: ServiceDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['slug'] as string;
    const service = slug ? findService(slug) : undefined;
    if (!service) {
      this.router.navigate(['/services']);
      return;
    }
    this.service = service;
    this.detail = SERVICE_DETAILS[slug];
  }
}
