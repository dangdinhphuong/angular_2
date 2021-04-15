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

  pro:any;
  proId: Number = 0;
  constructor( private productsService:ProductsService, 
    private route: ActivatedRoute) { }



    ngOnInit() {
      this.route.params.subscribe(params => {
        this.proId = params.id;
        this.productsService.findById(this.proId).subscribe(data => {
          this.pro = data;
          console.log(this.pro);
        });
      });
  
      
    }

    


 

}
