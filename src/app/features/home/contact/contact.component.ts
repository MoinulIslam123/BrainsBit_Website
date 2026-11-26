import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';
import { COMPANY } from '../../../config/company.config';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective, PageHeaderComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  company = COMPANY;
}
