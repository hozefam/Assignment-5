import { Validators } from '@angular/forms';
import { ProductService } from './../product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  @Input() selectedProductId: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.products$.subscribe((prods) => {
      this.products = prods;
    });
  }

  handleSelection(id: string) {
    this.selectedProductId = id;
    this.productService.mode$.next(null);
    this.productService.selectedProduct$.next(
      this.productService.products$.value.find((p) => p.id === id)
    );
  }
}
