import { Product } from './product';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {
  products$ = new BehaviorSubject<Product[]>([]);
  selectedProduct$ = new BehaviorSubject<Product>(null);
  mode$ = new Subject<string>();
  // productMode$ = new Subject<string>().asObservable();
  private products: Product[];

  constructor() {
    this.products = this.seedProducts();
    this.products$.next(this.products);
    this.mode$.next(null);
  }

  seedProducts(): Product[] {
    return [
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
    return this.products$.value;
  }

  getProductDetail(id: number): Product {
    return this.products$.value.find((p) => (p.id = id));
  }

  addProduct(product: Product) {
    const newProduct = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.products$.next(this.products);
    this.selectedProduct$.next(newProduct);
    this.mode$.next(null);
  }

  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    this.products[index] = updatedProduct;
    this.products$.next(this.products);
    this.selectedProduct$.next(updatedProduct);
    this.mode$.next(null);
  }

  deleteProduct(id: number) {
    const filteredProducts = this.products.filter((p) => p.id !== id);
    this.products = [...filteredProducts];
    this.products$.next(this.products);
    this.selectedProduct$.next(null);
    this.mode$.next(null);
  }
}
