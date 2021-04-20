import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { CategorysService } from '../../../.././services/categorys.service';
import { SuppliersService } from '../../../../services/suppliers.service';
import { Products } from '../../../.././models/products';
import { categories } from '../../../.././models/categories';
import { suppliers } from '../../../.././models/suppliers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-moster-list',
  templateUrl: './moster-list.component.html',
  styleUrls: ['./moster-list.component.css']
})
export class MosterListComponent implements OnInit {
  data!: any[];
  cates: Products[] = [];
  cate: categories[] = [];
  suppli:suppliers[]=[];
  totalLength:any;
  page: number = 3;
  Pegesize: number = 3;
  filterObject = {
    keyword: "",
    orderBy: "1",
    supplier:"",
    categories:"",
    pagesize:3
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
  constructor(private productsService: ProductsService, private categorysService: CategorysService, private suppliersService: SuppliersService) { }

  ngOnInit(): void {
    this.search();
    this.getCateData();
    this.getSuppliData();

  }
  size(){
    console.log(this.filterObject.pagesize);
    this.Pegesize=this.filterObject.pagesize
    this.page=1;
  }
  //------ get export data-----
  getCateData() {
    this.categorysService.all().subscribe(data => {
      this.cate = data;
      // console.log(this.cate);
    });
  }
  getSuppliData() {
    this.suppliersService.all().subscribe(data => {
      this.suppli = data;
      console.log(this.suppli);
    });
  }
// ----end get export data-----


  //---start export data
  search() {
    console.log(this.filterObject);

    this.productsService.getAll(this.filterObject).subscribe(data => {
      this.cates = data!;
    })
  }

  detele(item: any) {
    console.log("test", item.id);
    // lấy thông tin danh mục
    if(confirm('Bạn có chắc chắn muốn xoá không ?')){
    this.productsService.findById(item.id).subscribe(cate => {

      console.log(cate);
      this.productsService.delete(cate.id).subscribe(data => {

        this.search();
      });
    });}
  }

}
