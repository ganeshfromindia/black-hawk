import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productId: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  onsubmit(prdId) {
    this.productId = prdId;
    this.router.navigate(['/product', this.productId]);
  }
}
