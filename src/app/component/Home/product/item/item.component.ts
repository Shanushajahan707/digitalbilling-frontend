import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() product: any = {
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  addToCart(product: any) {
    console.log('Added to cart:', product);
    // Implement cart functionality here
  }
}
