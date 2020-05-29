import { Product } from './product';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  // productChanged$ = new BehaviorSubject<Product[]>([]);
  products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Pencil',
        description: 'Use this to write your story',
        price: 250,
        owner: 'Tpoaz Corp',
        color: 'black',
        quantity: 750,
        inStock: 'No',
      },
      {
        id: 2,
        name: 'Hammer',
        description: 'Hammer description',
        price: 100,
        owner: 'Stark Corp',
        color: 'red',
        quantity: 750,
        inStock: 'Yes',
      },
      {
        id: 3,
        name: 'Nails',
        description: 'Nails description',
        price: 100,
        owner: 'Nails Corp',
        color: 'silver',
        quantity: 10000,
        inStock: 'Yes',
      },
      {
        id: 4,
        name: 'Pen',
        description: 'Pen description',
        price: 100,
        owner: 'Pen Corp',
        color: 'blue',
        quantity: 20,
        inStock: 'No',
      },
      {
        id: 5,
        name: 'Notebook',
        description: 'Notebook description',
        price: 200,
        owner: 'Notebook Corp',
        color: 'white',
        quantity: 1450,
        inStock: 'No',
      },
    ];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductDetail(id: number): Product {
    return this.products.find((p) => p.id === id);
  }

  addProduct(newProduct: Product) {
    this.products.push({ ...newProduct, id: this.products.length + 1 });
  }

  updateProduct(id: number, updatedProduct: Product) {
    const filteredProducts = this.products.filter((p) => p.id !== id);
    this.products = [...filteredProducts, updatedProduct];
  }

  deleteProduct(id: number) {
    console.log('Delete Called');
    const filteredProducts = this.products.filter((p) => p.id !== id);
    this.products = [...filteredProducts];
  }
}
