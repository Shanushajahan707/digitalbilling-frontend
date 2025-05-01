import { Component } from '@angular/core';

interface Brand {
  name: string;
  logo: string;
}


@Component({
  selector: 'app-names',
  standalone: false,
  templateUrl: './names.component.html',
  styleUrl: './names.component.css'
})
export class NamesComponent {
  companyDataLeft = [
    { name: "Loreal", logo: "https://www.pngfind.com/pngs/m/263-2639122_loreal-paris-logo-png-loreal-transparent-png.png" },
    { name: "Lakme", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Lakm%C3%A9_logo.jpg" },
    { name: "Dazler", logo: "https://www.dazller.co.in/cdn/shop/files/dazller_logo_1.png?v=1681888091&width=598" },
    { name: "Mars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Yt-A4YqXHQWsu6ou7IbeGLX6qZ5O7-2bKQ&s" },
    { name: "Dermaco", logo: "https://images.yourstory.com/cs/images/companies/832143151843489829666727211459619963535360n1-1644384674373.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" },
    { name: "Dermdoc", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaH2BxEejehMjgYVSmwh3CMSXqoRkb9v6inw&s" },

  ];

  companyDataRight = [
    { name: "Ponds", logo: "https://assets.unileversolutions.com/v1/808850.jpg" },
    { name: "Maybellene", logo: "https://1000logos.net/wp-content/uploads/2021/04/Maybelline-logo.png" },
    { name: "Mamaearth", logo: "https://static.thearcweb.com/images/PROD/PROD-164cca1b-d99a-4b21-86ae-1296b4397fec.jpg" },
    { name: "Facescanada", logo: "https://i.pinimg.com/736x/15/8a/1a/158a1add203fb7c555a251e0dc1cb086.jpg" },
    { name: "Himalaya", logo: "https://img.favpng.com/14/15/0/the-himalaya-drug-company-brand-ayurveda-nutrition-png-favpng-ss5vgVmS5PFw6qV7jD7fH5rLc.jpg" },
  ];



  haircare: Brand[] = [
    { name: "Tresemme", logo: "https://allvectorlogo.com/img/2019/03/tresemme-logo.png" },
    { name: "Loreal", logo: "https://logos-world.net/wp-content/uploads/2020/04/LOreal-Logo.png" },
    { name: "Sunsilk", logo: "https://1000logos.net/wp-content/uploads/2022/05/Sunsilk-logo.png" },
    { name: "Streax", logo: "https://skincareshop.com.bd/wp-content/uploads/2022/02/Streax.png.webp" },
    { name: "Garnier", logo: "https://1000logos.net/wp-content/uploads/2022/04/Garnier-logo.jpg" },
    { name: "Himalaya", logo: "https://zerocreativity0.wordpress.com/wp-content/uploads/2017/01/himalaya-logo.jpg" }
  ];

  cosmetics: Brand[] = [
    { name: "Lakme", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Lakm%C3%A9_logo.jpg" },
    { name: "Maybelline", logo: "https://1000logos.net/wp-content/uploads/2021/04/Maybelline-logo.png" },
    { name: "Facescanada", logo: "https://i.pinimg.com/736x/15/8a/1a/158a1add203fb7c555a251e0dc1cb086.jpg" },
    { name: "Dazler", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatdgsypzPxlmIx_hrk8UxMvjXJbEQPecCpA&s" },
    { name: "Colouressence", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2J91uzFCLMxumTKqlVwUGVIYoE8DPbP7F6Q&s" },
    { name: "Olay", logo: "https://logos-world.net/wp-content/uploads/2020/11/Olay-Logo-2017-present.jpg" }
  ];

  skincare: Brand[] = [
    { name: "Dermaco", logo: "https://www.theshoppingfriendly.com/wp-content/uploads/2023/09/TheDermaCo.webp" },
    { name: "Dermdoc", logo: "https://buydermdoc.com/cdn/shop/files/dd_new_logo-01.png?v=1673335338&width=400" },
    { name: "Ponds", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiujUxGuajMaqKSlivlPsCUMUrFFtYPKXIQ&s" },
    { name: "Mamaearth", logo: "https://images.seeklogo.com/logo-png/48/1/mamaearth-logo-png_seeklogo-487672.png" },
    { name: "Cetaphil", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4TTtcppEm_llQyAxRzOPUqmfjVWn19-ipg&s" },
    { name: "Glow and Lovely", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Glow_%26_Lovely.svg" },
    { name: "Vaseline", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKgBExXehBEtjUJRbjD5a8TqiizkihSJNiQ&s" },
    { name: "Biotique", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Biotique_Logo-1.png" },
    { name: "Aqualogica", logo: "https://www.theshoppingfriendly.com/wp-content/uploads/2023/09/Aqualogica.webp" },
    { name: "VLCC", logo: "https://findlogovector.com/wp-content/uploads/2019/03/vlcc-personal-care-logo-vector.png" },
    { name: "Lotus", logo: "https://i.pinimg.com/originals/dc/7e/41/dc7e419f424998c8cd192bbeeca8645a.png" },
    { name: "Goodvibes", logo: "https://m.media-amazon.com/images/S/aplus-media/sota/7822d568-96fc-4d48-a4bc-4377fc29cd80.__CR0,0,300,300_PT0_SX300_V1___.png" },
    { name: "Natures", logo: "https://5.imimg.com/data5/SELLER/Default/2021/4/FR/MS/WV/127367285/nature-s-essence-daily-de-tan-face-wash.png" },
    { name: "Plum", logo: "https://i.pinimg.com/736x/3d/c2/77/3dc277d9b7eae42cb4fbef1f05909e61.jpg" },
    { name: "Jovees", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYzFfGfaaxGljxnbaxs9qRa80MO-tifTr8g&s" }
  ];

  perfumes: Brand[] = [
    { name: "Blue Lady", logo: "https://images.stylishop.com/cdn-cgi/image/width=500,quality=100/media/catalog/product/2910286843/images/2910286843_2.jpg?v=1" },
    { name: "Nivea", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Nivea_Logo.png" },
    { name: "Dove", logo: "https://static.cdnlogo.com/logos/d/56/dove.png" },
    { name: "Enchanteur", logo: "https://wiproconsumercare.com/wp-content/uploads/Enchanteur_Logo_02.png" },
    { name: "Yardley", logo: "https://i.pinimg.com/736x/dc/39/4d/dc394dd7ead0dc66a30ff490d928f193.jpg" },
    { name: "Eternal Love", logo: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/e/AmazonStores/A21TJRUUN4KGV/296f04a2f1c7dbc2c891f78a5aadf806.w2435.h649.jpg" },
    { name: "Royal Mirage", logo: "https://royalmirageparfums.com/wp-content/uploads/2024/03/rm-logo-cryst-logo-gold-e1510772269605-1.png" },
    { name: "Axe", logo: "https://www.unilever.com/content-images/92ui5egz/production/b953900d039e64d54e396b500343f64065fe3f62-280x280.jpg?w=375&h=375&fit=crop&auto=format" }
  ];

  powder: Brand[] = [
    { name: "Cuticura", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLR9aNGpQibW1t5FDMVjadXb84zuLMtJH8LQ&s" },
    { name: "Ponds", logo: "https://brandlogos.net/wp-content/uploads/2021/11/ponds-brandlogo.net_.png" },
    { name: "Solid", logo: "https://dcassetcdn.com/design_img/3713960/792503/22425793/fz2qk0mqjnwm87y07yr3d53a3k_thumbnail.png" },
    { name: "Z", logo: "https://kumaribasket.com/wp-content/uploads/2021/02/Z-Talc-Powder-1200x675.jpg" },
    { name: "Dhatri", logo: "https://portfolio.padath.com/img/dhathri/dhlogo.png" }
  ];

  categories = [
    { name: "Hair Care", brands: this.haircare, direction: "left" },
    { name: "Cosmetics", brands: this.cosmetics, direction: "right" },
    { name: "Skin Care", brands: this.skincare, direction: "left" },
    { name: "Perfumes", brands: this.perfumes, direction: "right" },
    { name: "Powder", brands: this.powder, direction: "left" }
  ];
}
