import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  ContactPayload,
  ContactService,
} from '../../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  model: ContactPayload = this.emptyModel();
  sending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  constructor(private contactService: ContactService) {}

  async submit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    if (this.sending) return;

    this.sending = true;
    this.status = 'idle';
    try {
      await this.contactService.send(this.model);
      this.status = 'success';
      form.resetForm(this.emptyModel());
    } catch (err) {
      console.error(err);
      this.status = 'error';
    } finally {
      this.sending = false;
    }
  }

  private emptyModel(): ContactPayload {
    return { name: '', company: '', email: '', phone: '', message: '' };
  }
}
