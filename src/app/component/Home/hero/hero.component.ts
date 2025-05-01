import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  images: string[] = [
    'https://hmy-group.com/wp-content/uploads/2023/04/HMY_6-consejos-para-aumentar-el-impacto-visual-tienda-salud-y-belleza_int3.jpg',
    'https://thumbs.dreamstime.com/b/lisbon-portugal-august-makeup-skincare-cosmetic-products-sale-fashion-beauty-department-store-display-makeup-skincare-115435937.jpg',
    'https://infashionbusiness.com/admin_assets/images/products/infashion-1713521417.jpeg',
  'https://t4.ftcdn.net/jpg/02/86/95/23/360_F_286952389_QjvcQ8cHvQbjke6mRRksRVSU1i0dlaA2.jpg'  ];

  currentIndex: number = 0;
  currentImage: string = this.images[0];
  private intervalId: any;

  ngOnInit() {
    this.startImageRotation();
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 5000); // change every 5 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}