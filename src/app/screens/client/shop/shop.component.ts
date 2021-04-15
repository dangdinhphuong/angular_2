import { Component, OnInit } from '@angular/core';
import {CategorysService} from'../../../services/categorys.service';
import { ProductsService } from '../../../services/products.service';
import{categories} from'../../../models/categories';
import { Products } from '../../../models/products';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cate: categories[] = [];
  product: Products[] = [];
  page: number = 1;
  filterObject = {
    keyword: "",
    orderBy: "1",
    supplier:"",
    categories:"",
  }
  orderCondition: any[] = [
    {
      id: "1",
      name: "Giá tăng dần"
    },
    {
      id: "2",
      name: "Giá giảm dần"
    },
    {
      id: "3",
      name: "Sản phẩm mới "
    },
    {
      id: "4",
      name: "Sản phẩm cũ "
    }
  ];
  constructor(private productsService: ProductsService, private categorysService: CategorysService) { }

  ngOnInit(): void {
    this.search();
    this.getCateData();
  }
  getCateData() {
    this.categorysService.all().subscribe(data => {
      this.cate = data;
      // console.log(this.cate);
    });
  }
  search(){
    console.log(this.filterObject);
    this.productsService.getAll(this.filterObject).subscribe(data => {
      this.product = data;
      
    })
  }
}
