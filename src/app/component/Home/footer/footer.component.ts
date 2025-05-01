import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  
  onNewsletterSubmit(email: string) {
    console.log('Newsletter subscription for:', email);
    // Implement newsletter subscription logic
  }
}
