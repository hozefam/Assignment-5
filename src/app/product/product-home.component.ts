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
          (productSelection)="handleProductSelection($event)"
          [products]="products"
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
        <app-product-detail
          [product]="selectedProduct"
          (cancel)="cancelSelectedProduct()"
          (edit)="editProduct()"
        ></app-product-detail>
      </div>
      <div class="column is-5">
        <app-product-form
          (cancelForm)="cancelForm()"
          *ngIf="mode !== null"
          [mode]="mode"
          [product]="selectedProduct"
          (productsChanged)="updateProducts()"
        ></app-product-form>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductHomeComponent implements OnInit {
  products: Product[];
  selectedProduct: Product = null;
  mode: string = null;
  inEditMode = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  handleProductSelection(productId) {
    if (productId) {
      this.selectedProduct = this.productService.getProductDetail(productId);
      this.mode = null;
    }
  }

  cancelSelectedProduct() {
    this.selectedProduct = null;
  }

  cancelForm() {
    this.mode = null;
  }

  setAddMode() {
    this.mode = 'ADD';
    this.selectedProduct = null;
  }

  editProduct() {
    this.mode = 'EDIT';
  }

  updateProducts() {
    this.mode = null;
    this.selectedProduct = null;
    this.products = this.productService.getProducts();
  }
}
