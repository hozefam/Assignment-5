import { ProductService } from './../product.service';
import { Product } from './../product';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
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
  @Input() product!: Product;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.product = changes.product.currentValue;
  }

  cancelSelection() {
    this.cancel.emit();
  }

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.productService.deleteProduct(this.product.id);
  }
}
