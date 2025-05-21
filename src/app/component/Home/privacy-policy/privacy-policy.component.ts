import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  standalone: false,
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Privacy Policy | Belle\'s Avenue - Fashion Hub');
    
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Belle\'s Avenue Privacy Policy - Learn how we collect, use, and protect your personal information when shopping with us and using our digital billing services.' 
    });
    
    // Add other meta tags as needed
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Privacy Policy | Belle\'s Avenue' 
    });
    
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Learn how Belle\'s Avenue collects, uses, and protects your personal information when shopping with us.' 
    });
    
    // More meta tags as needed
  }
}
