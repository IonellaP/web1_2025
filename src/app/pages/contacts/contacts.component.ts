import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-contacts',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    MatIcon
  ],
  templateUrl: './contacts.component.html',
  standalone: true,
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contactForm: FormGroup;
  expandedFaq: number | null = null;

  formFields = [
    { id: 'fullName', name: 'fullName', label: 'Full Name', placeholder: 'John Doe', type: 'text', error: 'Full name is required' },
    { id: 'email', name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email', error: 'Valid email is required' },
    { id: 'orderNumber', name: 'orderNumber', label: 'Order Number (optional)', placeholder: 'e.g. 123456', type: 'text', error: '' },
    { id: 'message', name: 'message', label: 'Message', placeholder: 'How can we help you?', type: 'textarea', error: 'Message is required' }
  ];

  faqs = [
    { question: 'How can I track my order?', answer: 'You can track your order from your account dashboard.' },
    { question: 'Can I return an item?', answer: 'Yes, returns are accepted within 30 days of purchase.' },
    { question: 'How do I contact support?', answer: 'Use the form above or call us directly during business hours.' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      orderNumber: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted', this.contactForm.value);
      this.contactForm.reset();
      alert('Message sent successfully!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  toggleFaq(index: number): void {
    this.expandedFaq = this.expandedFaq === index ? null : index;
  }
}

