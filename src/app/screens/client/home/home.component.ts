import { Component, OnInit } from '@angular/core';
import {NewsService} from'../../../services/news.service';
import { ProductsService } from '../../../services/products.service';
import{new_paper} from'../../../models/new_paper';
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
  news: new_paper[] = []; 
  constructor( private productsService:ProductsService,private newsService:NewsService) { }
  ngOnInit(): void {
    this.getDateLimitData();
    this.getSaleLimitData();
    this.getEventData();
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
  getEventData(){
    this.newsService.DateLimit().subscribe(data => {
      this.news = data;
      console.log('test',data);
      
    });
  }
}
