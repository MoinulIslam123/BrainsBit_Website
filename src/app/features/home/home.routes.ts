import { Routes } from '@angular/router';
import { SERVICES } from '../../data/services.data';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    title: 'BrainsBit | Your Trusted Software Development Partner',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about-us',
    title: 'About Us | BrainsBit',
    loadComponent: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'services',
    title: 'Our Services | BrainsBit',
    loadComponent: () =>
      import('./services/services.component').then((m) => m.ServicesComponent),
  },
  // /services/custom-software-development, /services/web-application-development, ...
  ...SERVICES.map((s) => ({
    path: `services/${s.slug}`,
    title: `${s.navLabel} | BrainsBit`,
    data: { slug: s.slug },
    loadComponent: () =>
      import('./service-detail/service-detail.component').then(
        (m) => m.ServiceDetailComponent,
      ),
  })),
  {
    path: 'careers',
    title: 'Careers | BrainsBit',
    loadComponent: () =>
      import('./careers/careers.component').then((m) => m.CareersComponent),
  },
  {
    path: 'contact',
    title: 'Contact Us | BrainsBit',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
];
