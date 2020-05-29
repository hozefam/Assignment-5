import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-home',
  template: `
    <div class="columns ">
      <div class="column is-2">
        <app-product-list
          [selectedProductId]="selectedProduct?.id"
        ></app-product-list>
        <br />
        <button
          (click)="setAddMode()"
          class="button is-light is-outlined is-info is-fullwidth"
        >
          Add Product
        </button>
      </div>
      <div class="column is-5" *ngIf="selectedProduct">
        <app-product-detail [product]="selectedProduct"></app-product-detail>
      </div>
      <div class="column is-5" *ngIf="mode !== null">
        <app-product-form
          [product]="selectedProduct"
          [mode]="mode"
        ></app-product-form>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductHomeComponent implements OnInit {
  mode: string = null;
  selectedProduct: Product = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.selectedProduct$.subscribe((val) => {
      this.selectedProduct = val;
    });

    this.productService.mode$.subscribe((val) => {
      this.mode = val;
    });
  }

  setAddMode() {
    this.productService.selectedProduct$.next(null);
    this.productService.mode$.next('ADD');
  }
}
