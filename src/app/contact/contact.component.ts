// contact.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        await emailjs.send(
          'service_2ve2c6w', // Get from EmailJS dashboard
          'template_rg5h1en', // Get from EmailJS dashboard
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
            to_email: 'sabinahkemunto@gmail.com'
          },
          '9fu_K0pqN8EoTFYUb' // Get from EmailJS dashboard
        );
        
        this.submitStatus = 'success';
        this.contactForm.reset();
      } catch (error) {
        this.submitStatus = 'error';
        console.error('Error sending email:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}