import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPANY } from '../../../config/company.config';
import { SERVICES } from '../../../data/services.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  company = COMPANY;
  services = SERVICES;

  links = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about-us' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact us', path: '/contact' },
  ];
}
