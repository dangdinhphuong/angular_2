import { Component, OnInit } from '@angular/core';
import {CategorysService} from'../../../services/categorys.service';
import { ProductsService } from '../../../services/products.service';
import{categories} from'../../../models/categories';
import { Products } from '../../../models/products';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  data!: any[];
  // pro: Products[] = [];
  book :Products[] = [];
  proId: Number = 0;
  constructor( private productsService:ProductsService, 
    private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.route.params.subscribe(param => {
      this.proId = param.id;
      // console.log(param.id);
    });
     await  this.getid();


  }
getid(){
  this.productsService.filBookID(this.proId).subscribe(item=>{
    this.book=item;
    console.log( this.book);
    return item;
  })
}

}
