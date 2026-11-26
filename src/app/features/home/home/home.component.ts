import { RevealDirective } from '../../../directives/reveal.directive';
import { StageComponent } from '../../shared/stage/stage.component';
import { ServiceSceneComponent } from '../../shared/service-scene/service-scene.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../../../data/services.data';
import { CallUsComponent } from '../../shared/call-us/call-us.component';
import { HeroComponent } from '../hero/hero.component';
import { ClientsMarqueeComponent } from '../clients-marquee/clients-marquee.component';

interface Offer {
  icon: string;
  title: string;
  text: string;
}

// One look per stacked service card, so the stack has rhythm
const CARD_STYLES = [
  { card: 'border-line bg-white', title: 'text-ink', body: 'text-muted', btn: 'btn-ink', icon: 'bg-brand-soft text-brand' },
  { card: 'border-brand-sky/70 bg-brand-soft', title: 'text-ink', body: 'text-muted', btn: 'btn-primary', icon: 'bg-white text-brand' },
  { card: 'border-white/10 bg-ink', title: 'text-white', body: 'text-white/70', btn: 'btn-light', icon: 'bg-white/10 text-brand-bright' },
  { card: 'border-line bg-white', title: 'text-ink', body: 'text-muted', btn: 'btn-primary', icon: 'bg-brand-soft text-brand' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RevealDirective,
    StageComponent,
    ServiceSceneComponent,
    RouterLink,
    HeroComponent,
    ClientsMarqueeComponent,
    CallUsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cards = SERVICES.map((s, i) => ({ ...s, ...CARD_STYLES[i], iconName: s.icon }));

  servicesIntro =
    'We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.';

  offerIntro =
    'BrainsBit works as an extension of your development and testing team. We will work together to solve your business cases and get the maximum value of your budget. One of our differentiating qualities is that we take the time to understand the particular challenges, difficulties, and needs of your business.';

  offers: Offer[] = [
    {
      icon: 'fa-user-graduate',
      title: 'Qualified engineers',
      text: 'Experienced developers and testers matched to your stack and your goals.',
    },
    {
      icon: 'fa-people-group',
      title: 'Dedicated team',
      text: 'A team assigned to your product, working as an extension of yours rather than an outside vendor.',
    },
    {
      icon: 'fa-handshake',
      title: 'Collaborative process',
      text: 'You see the work as it happens, with open communication and agile checkpoints along the way.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Continuous supervision',
      text: 'Delivery is managed from kickoff to release, with regular status reports and quality reviews.',
    },
  ];
}
