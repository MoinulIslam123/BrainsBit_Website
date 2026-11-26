import { Component } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';
import { COMPANY } from '../../../config/company.config';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-call-us',
  standalone: true,
  imports: [RevealDirective, ContactFormComponent],
  templateUrl: './call-us.component.html',
  styleUrl: './call-us.component.css',
})
export class CallUsComponent {
  company = COMPANY;
}
