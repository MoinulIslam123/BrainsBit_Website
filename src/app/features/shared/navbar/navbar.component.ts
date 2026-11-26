import { DOCUMENT } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY } from '../../../config/company.config';
import { SERVICES } from '../../../data/services.data';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private doc = inject(DOCUMENT);
  private scroll = inject(ScrollService);

  site = COMPANY;
  services = SERVICES;

  nav = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact us', path: '/contact' },
  ];
  // "Start a project" is the button on desktop, so Contact is left out of the link row
  navDesktop = this.nav.filter((l) => l.path !== '/contact');

  open = signal(false); // mobile drawer
  servicesOpen = signal(false); // desktop panel (hover) / drawer accordion (tap)
  scrolled = this.scroll.scrolled;
  progress = this.scroll.progress;

  constructor() {
    // lock page scroll while the mobile drawer is open
    effect(() => {
      this.doc.body.style.overflow = this.open() ? 'hidden' : '';
    });
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
    this.servicesOpen.set(false);
  }

  toggle() {
    this.open.update((v) => !v);
    if (!this.open()) this.servicesOpen.set(false);
  }

  close() {
    this.open.set(false);
    this.servicesOpen.set(false);
  }

  toggleServices() {
    this.servicesOpen.update((v) => !v);
  }

  onServicesEnter() {
    if (this.isDesktop()) this.servicesOpen.set(true);
  }

  onServicesLeave() {
    if (this.isDesktop()) this.servicesOpen.set(false);
  }

  private isDesktop(): boolean {
    return this.doc.defaultView ? this.doc.defaultView.innerWidth >= 1024 : false;
  }
}
