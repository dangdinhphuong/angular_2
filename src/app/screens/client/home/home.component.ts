import { Component, OnInit } from '@angular/core';
import {CategorysService} from'../../../services/categorys.service';
import { ProductsService } from '../../../services/products.service';
import{categories} from'../../../models/categories';
import { Products } from '../../../models/products';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: any[];
  pro: Products[] = [];
  sale: Products[] = [];
  constructor( private productsService:ProductsService) { }
  ngOnInit(): void {
    this.getDateLimitData();
    this.getSaleLimitData();
  }
//---start export data
  getDateLimitData(){
    this.productsService.DateLimit().subscribe(data => {
      this.pro = data;
      console.log(data);
      
    });
  }
  getSaleLimitData(){
    this.productsService.SaleLimit().subscribe(data => {
      this.sale = data;
      console.log(data);
      
    });
  }
}
