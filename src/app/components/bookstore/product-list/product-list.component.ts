import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productService: ProductListService;
  books: any;

  constructor(productService: ProductListService) {
    this.productService = productService;
   }

  ngOnInit(): void {
    this.books = this.productService.getBook().subscribe((
      data => {
        this.books = data;
      }),
      (err) => {
        document.getElementById("book-error")?.classList.toggle("d-none");
      }
    );
  }



}
