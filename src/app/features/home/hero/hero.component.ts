import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StageComponent } from '../../shared/stage/stage.component';
import { HeroShowcaseComponent } from '../hero-showcase/hero-showcase.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, StageComponent, HeroShowcaseComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  facts = [
    { value: 'A decade', label: 'of custom software experience' },
    { value: 'Web, mobile, QA', label: 'under one roof' },
    { value: 'US and Canada', label: 'clients served' },
  ];
}
