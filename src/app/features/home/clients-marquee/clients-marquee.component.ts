import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-marquee.component.html',
  styleUrl: './clients-marquee.component.css',
})
export class ClientsMarqueeComponent {
  clients = [1, 2, 3, 4, 5, 6, 7].map((n) => `assets/carosel-${n}.png`);
  // three copies: the track slides by exactly one copy, so the loop is seamless
  loop = [...this.clients, ...this.clients, ...this.clients];
}
