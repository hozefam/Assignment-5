import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Input() selectedProductId: number;

  @Output() productSelection: EventEmitter<number>;

  constructor() {
    this.productSelection = new EventEmitter();
  }

  ngOnInit(): void {}

  handleSelection(id: number) {
    this.selectedProductId = id;
    this.productSelection.emit(id);
  }
}
