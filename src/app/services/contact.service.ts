import { Injectable } from '@angular/core';
import { EMAILJS_CONFIG } from '../config/company.config';

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  /** Sends the message through EmailJS (browser only). */
  async send(payload: ContactPayload): Promise<void> {
    const emailjs = await import('@emailjs/browser');
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      { ...payload },
      { publicKey: EMAILJS_CONFIG.publicKey },
    );
  }
}
