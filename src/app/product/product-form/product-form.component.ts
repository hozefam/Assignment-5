import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnChanges {
  @Input() mode: string;
  @Input() product: Product;

  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.mode = changes.mode.currentValue;
    this.product = changes.product.currentValue;

    this.productForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      owner: [null, Validators.required],
      color: [null, Validators.required],
      quantity: [null, Validators.required],
      inStock: [false],
    });

    if (this.mode === 'EDIT') {
      this.productForm.setValue({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        owner: this.product.owner,
        color: this.product.color,
        quantity: this.product.quantity,
        inStock: this.product.inStock,
      });
    }
  }

  cancel() {
    this.productService.mode$.next(null);
  }

  submit() {
    if (this.productForm.valid) {
      if (this.mode === 'ADD') {
        this.productService.addProduct(this.productForm.value);
      } else if (this.mode === 'EDIT') {
        this.productService.updateProduct(this.productForm.value);
      }
    }
  }
}
