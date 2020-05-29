import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductHomeComponent } from './product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductHomeComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: ProductService,
      useClass: ProductService,
    },
  ],
  exports: [ProductHomeComponent],
})
export class ProductModule {}
