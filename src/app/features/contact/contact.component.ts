import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { LanguageService } from '../../core/services/language.service';
import { spanishData, englishData, PortfolioData } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  data: PortfolioData['contact'] = {
    title: '',
    description: '',
    details: {
      email: '',
      phone: '',
      location: ''
    },
    form: {
      namePlaceholder: '',
      emailPlaceholder: '',
      messagePlaceholder: '',
      buttonText: '',
      sending: '',
      successMessage: '',
      errorMessage: '',
      errors: {
        nameRequired: '',
        nameMinLength: '',
        emailRequired: '',
        emailInvalid: '',
        messageRequired: '',
        messageMinLength: ''
      }
    }
  };
  
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.data = lang === 'es' ? spanishData.contact : englishData.contact;
    });
  }

  ngOnInit() {
    emailjs.init('GmNNhRKIrhaDTdpRq');
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitStatus = null;

      try {
       await emailjs.send(
          'service_9t9lu9b',     
          'template_zzoc5b5',    
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            message: this.contactForm.value.message,
            reply_to: this.contactForm.value.email, // <--- agregar esto
          }
        );

        this.submitStatus = 'success';
        this.contactForm.reset();
      } catch (error) {
        console.error('Error:', error);
        this.submitStatus = 'error';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  get nameError(): string {
    const control = this.contactForm.get('name');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return this.data.form.errors?.nameRequired || 'Name is required';
      if (control.errors['minlength']) return this.data.form.errors?.nameMinLength || 'The name must have at least 2 characters';
    }
    return '';
  }

  get emailError(): string {
    const control = this.contactForm.get('email');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return this.data.form.errors?.emailRequired || 'Email es required';
      if (control.errors['email']) return this.data.form.errors?.emailInvalid || 'Email is not valid';
    }
    return '';
  }

  get messageError(): string {
    const control = this.contactForm.get('message');
    if (control?.errors && control.touched) {
      if (control.errors['required']) return this.data.form.errors?.messageRequired || 'Name is required';
      if (control.errors['minlength']) return this.data.form.errors?.messageMinLength || 'The message must be at least 10 characters.';
    }
    return '';
  }
}
