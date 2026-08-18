import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
   private productsSignal = signal<Product[]>([
    { id: 1, name: 'Wireless Headphones', price: 9999, image: 'https://static3.webx.pk/files/68529/Images/61kfsu-cykl.-ac-sl1500--68529-0-180124040712888.jpg', description: 'Noise-cancelling wireless headphones.', color: 'black', rating: 4.5, status: 'in-stock' },
    { id: 2, name: 'Smart Watch', price: 7000, image: 'https://i5.walmartimages.com/seo/Ratfeit-Smart-Watch-Men-Women-Make-Calls-Text-1-7-HD-Full-Screen-Digital-Watches-Screen-Metal-Case-Remote-Take-Photo-IP67-Water-Proof-Smart-Watch-IOS_b039d32a-0788-482f-b321-957925b0b4b9.4f43ead3d18d002d6a85321a915356cd.jpeg', description: 'Fitness tracking smart watch.', color: 'off-white', rating: 4.2, status: 'in-stock' },
    { id: 3, name: 'Bluetooth Speaker', price: 5000, image: 'https://www.portronics.com/cdn/shop/files/portronics_sound_drum_p_mobile_speaker.jpg?v=1732797960', description: 'Portable bluetooth speaker.', color: 'blue', rating: 4.0, status: 'in-stock' },
    { id: 4, name: 'Laptop Stand', price: 2500, image: 'https://vmart.pk/cdn/shop/files/UnitekD1137AGY01USB-CFoldableLaptopStandwithDockingStation.webp?v=1754732303', description: 'Adjustable aluminum laptop stand.', color: 'silver', rating: 4.3, status: 'in-stock' },
    { id: 5, name: 'Mechanical Keyboard', price: 8500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oqtueEiieqG7cNlHU7rhU35iPUUGIi-vFxANcNNprkIXcUkiGuQ3760&s=10', description: 'RGB backlit mechanical keyboard.', color: 'black', rating: 4.7, status: 'in-stock' },
    { id: 6, name: 'Wireless Mouse', price: 2200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eNmhpuRFSgaxPTkVdUNSSznGD70HFemfgvZYqvSk65qx1Nx9ATd6_QY&s=10', description: 'Ergonomic wireless mouse.', color: 'grey', rating: 4.1, status: 'in-stock' },
    { id: 7, name: 'USB-C Hub', price: 3200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdH0G1hqJdvgQs5sPUm2ukdakNUiL7cWuLXNLwY_8MbuzcBtWArdobOSDl&s=10', description: '7-in-1 USB-C hub.', color: 'grey', rating: 4.0, status: 'in-stock' },
    { id: 8, name: 'Desk Lamp', price: 3800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAEH8m5ura0i3WA_0k6ZId-s4FIDOk2mTLr8z5_H2AjcUbkmqBcwmUMuj&s=10', description: 'LED desk lamp with dimmer.', color: 'black', rating: 4.2 , status: 'in-stock' },
    { id: 9, name: 'Backpack', price: 4500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBJh94S1GVAjDXpM_n9vu1j0sZaKWtpr9azAeHtLGC3IJaYF1LJtc5y4&s=10', description: 'Water-resistant laptop backpack.', color: 'black', rating: 4.3, status: 'in-stock' },
    { id: 10, name: 'Water Bottle', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaPRsHaCdApdSLfyiugVH5JmOgNKiHXNAVePkwMvBwmKQPm9NiYR9Q6F-&s=10', description: 'Insulated steel water bottle.', color: 'blue', rating: 4.1, status: 'in-stock' },
    { id: 11, name: 'Phone Case', price: 900, image: 'https://www.baseus.pk/cdn/shop/files/Baseus-iPhone-17-Pro-Crystal-Slim-Magnetic-With-Lense-Background-cover-Phone-Case-Clear-P0045T07-baseuscolombo-5-1.jpg?v=1758791841&width=800', description: 'Shockproof phone case.', color: 'white', rating: 4.2, status: 'in-stock' },
    { id: 12, name: 'Portable Charger', price: 2800, image: 'https://m.media-amazon.com/images/I/41F1eVfVD5L._SL500_.jpg', description: '20000mAh power bank.', color: 'black', rating: 4.3, status: 'in-stock' },
    { id: 13, name: 'Desk Organizer', price: 1500, image: 'https://img.drz.lazcdn.com/static/pk/p/918e75dc6291e83fcf929640a3b00a2e.jpg_720x720q80.jpg', description: 'Raught iron desk organizer.', color:'black', rating: 4.2, status: 'in-stock' },
    { id: 17, name: 'Yoga Mat', price: 500, image: 'https://img.drz.lazcdn.com/static/pk/p/988eb87e4755cc4587eb3264d95b6d6b.jpg_720x720q80.jpg', description: 'Non-slip yoga mat.', color: 'blue', rating: 4.2 , status: 'in-stock' },
    { id: 18, name: 'Table Fan', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVp92rCKcxcyuyEeUHw1hP5TMXUtHSTIhMKIdEW_m4_CfldcPmLrVIR8&s=10', description: 'Compact desk fan.', color: 'black', rating: 4.1, status: 'in-stock' },
    { id: 19, name: 'Coffee Mug', price: 800, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1HM3rdL3AXJUVgPH7q878JbOsgMR0jxatDnuWCw_rHl_6u1lMZEERr4&s=10', description: 'Steel insulated coffee mug.', color: 'black', rating: 4.3, status: 'in-stock' },
    { id: 20, name: 'Sunhat', price: 1000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTJX6aq87qjNyTuI7lljEvI5JTGBy1L1lYrqXXt37qgl_fytdepxlwGVw&s=10', description: 'Wide-brim sun hat.', color: 'beige', rating: 4.2, status: 'in-stock' },
  ]);

  getProducts(): Product[] {
    return this.productsSignal();
  }

  getProductById(id: number): Product | undefined {
     return this.productsSignal().find(p => p.id === id);
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newId = this.productsSignal().length
      ? Math.max(...this.productsSignal().map(p => p.id)) + 1
      : 1;
    this.productsSignal.update(products => [...products, { ...product, id: newId }]);
  }

  updateProduct(id: number, updates: Partial<Product>): void {
    this.productsSignal.update(products =>
      products.map(p => p.id === id ? { ...p, ...updates } : p)
    );
  }

  updateStatus(id: number, status: Product['status']): void {
    this.updateProduct(id, { status });
  }

  deleteProduct(id: number): void {
    this.productsSignal.update(products => products.filter(p => p.id !== id));
  }
}




