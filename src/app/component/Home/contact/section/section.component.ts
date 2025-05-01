import { Component } from '@angular/core';
import { LocationComponent } from '../../location/location.component';
import { FormComponent } from '../form/form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactsection',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
  // Removed FormComponent from imports as it is not standalone,
})
export class ContactSectionComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Implement form submission logic here
      this.contactForm.reset();
    } else {
      // Mark all fields as touched to trigger validation visuals
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}
