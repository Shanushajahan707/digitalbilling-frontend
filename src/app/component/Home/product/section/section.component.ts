import { Component } from '@angular/core';

interface Category {
  title: string;
  description: string;
  imageUrl: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  categories: Category[] = [];
  products: Product[] = [];

  

  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.categories = [
      {
        title: 'Jewelry',
        description: 'Elegant and handcrafted accessories for every occasion.',
        imageUrl: 'https://c1.wallpaperflare.com/preview/337/65/123/gold-jewelry-jewelry-band-luxury-gem-jewellery.jpg'
      },
      {
        title: 'Accessories',
        description: 'Perfect finishing touches to complete your elegant look.',
        imageUrl: 'https://c8.alamy.com/comp/2F4W2CW/hair-accessories-woman-hair-items-hair-clips-hairpins-hairband-and-hair-grips-female-hair-tools-fashion-hair-accessories-vector-illustration-set-2F4W2CW.jpg'
      },
      {
        title: 'Beauty & Cosmetics',
        description: 'Enhance your beauty with our premium cosmetics and beauty products.',
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg' // Add an appropriate image URL
      },
      {
        title: 'Perfumes',
        description: 'A selection of fragrances for every mood and occasion.',
        imageUrl: 'https://www.roseetmarius.com/blog/wp-content/uploads/2024/08/Design-sans-titre-5-940x351.png' // Add an appropriate image URL
      },
      {
        title: 'Rental Jewelry',
        description: 'Elegant pieces available for rent to complete your look.',
        imageUrl: 'https://i.ytimg.com/vi/e-jZEoln4fc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXmRzCjoE4QDXiX_8bfsw1uVNrGw' // Add an appropriate image URL
      },
    ];
  }

  loadProducts() {
    this.products = [
      {
        id: 1,
        name: 'Local Jewelry',
        description: 'Handcrafted by local artisans',
        price: 89.99,
        imageUrl: 'https://ebnw.net/wp-content/uploads/2017/10/Jaipur-Gems-and-Jewellery.jpg'
      },
      {
        id: 2,
        name: 'Luxury Bag',
        description: 'Elegant design for any occasion',
        price: 129.99,
        imageUrl: 'assets/images/product2.jpg'
      },
      {
        id: 3,
        name: 'Designer Dress',
        description: 'Premium quality fabric and design',
        price: 169.99,
        imageUrl: 'assets/images/product3.jpg'
      },
      {
        id: 4,
        name: 'Royal Scarf',
        description: 'Silk-blend luxury accessory',
        price: 79.99,
        imageUrl: 'assets/images/product4.jpg'
      },
      {
        id: 5,
        name: 'Darted Blouse',
        description: 'Classic design with modern touch',
        price: 99.99,
        imageUrl: 'assets/images/product5.jpg'
      },
      {
        id: 6,
        name: 'Mama Boots',
        description: 'Comfortable and stylish footwear',
        price: 149.99,
        imageUrl: 'assets/images/product6.jpg'
      },
      {
        id: 7,
        name: 'Gold Ring',
        description: 'A classic piece of jewelry in 24K gold',
        price: 199.99,
        imageUrl: 'assets/images/gold-ring.jpg' // Add image URL
      },
      {
        id: 8,
        name: 'Gold Bangle',
        description: 'Elegant design for a refined look',
        price: 159.99,
        imageUrl: 'assets/images/gold-bangle.jpg' // Add image URL
      },
      {
        id: 9,
        name: 'Perfume - Rose Essence',
        description: 'A romantic fragrance with floral notes',
        price: 79.99,
        imageUrl: 'assets/images/perfume1.jpg' // Add image URL
      },
      {
        id: 10,
        name: 'Luxury Hairpin',
        description: 'Add a touch of elegance to your hairstyle',
        price: 39.99,
        imageUrl: 'assets/images/hairpin.jpg' // Add image URL
      }
    ];
  }


}
