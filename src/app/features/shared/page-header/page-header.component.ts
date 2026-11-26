import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderSceneComponent, HeaderSceneKind } from '../header-scene/header-scene.component';
import { StageComponent } from '../stage/stage.component';

export interface Crumb {
  label: string;
  link: string;
}

/**
 * Every page opens the same way: the title on the left and a live, animated
 * "stage" on the right. Pick the stage with [scene].
 */
@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, StageComponent, HeaderSceneComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() scene: HeaderSceneKind = 'services';
  /** Parent pages shown before the current one, e.g. [{label:'Services', link:'/services'}] */
  @Input() crumbs: Crumb[] = [];
}
