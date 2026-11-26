import { Component } from '@angular/core';

/** The blue surface that holds a page's visual. Size it from the outside, e.g. class="aspect-[5/4]". */
@Component({
  selector: 'app-stage',
  standalone: true,
  template: '<ng-content></ng-content>',
  host: { class: 'stage block' },
})
export class StageComponent {}
