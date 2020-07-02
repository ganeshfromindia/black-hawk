import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FILists } from './product.model';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productId: string;
  gmListsAll: FILists[];
  gmLists: FILists[];
  gmList = {
    prdid: '',
    imageUrl: '',
    name: '',
    stars: 0,
    desc: '',
    price: '',
    availability: true,
  };
  starRatings: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getFI().subscribe((data) => {
      this.gmListsAll = data;
      this.gmLists = this.gmListsAll.filter((datad) => {
        return datad.prdid === this.productId;
      });
      this.gmList = this.gmLists[0];
      this.starRatings.length = this.gmLists[0].stars;
    });
  }

  getFI(): Observable<FILists[]> {
    return this.httpClient
      .get<FILists[]>('data.json')
      .pipe(tap((data) => data));
  }

  gotoHome() {
    this.router.navigate(['/products']);
  }
}
