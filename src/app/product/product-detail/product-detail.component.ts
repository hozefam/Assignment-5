import { ProductService } from './../product.service';
import { Product } from './../product';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges {
  @Input() product: Product;

  constructor(private productService: ProductService) {}

  cancelSelection() {
    this.productService.selectedProduct$.next(null);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
  }

  onEdit() {
    this.productService.mode$.next('EDIT');
  }

  onDelete() {
    this.productService.deleteProduct(this.product.id);
  }
}
