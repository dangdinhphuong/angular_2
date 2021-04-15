import { Component, OnInit } from '@angular/core';

import { NewcateService } from '../../../../services/newcate.service';
import { NewsService } from '../../../../services/news.service';
import { new_cate } from '../../../../models/new_cate';
import { new_paper } from '../../../../models/new_paper';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  data!: any[];
  news: new_paper[] = [];
  newcate: new_cate[] = [];
  // suppli:suppliers[]=[];
  totalLength: any;
  page: number = 1;
  filterObject = {
    keyword: "",
    orderBy: "1",
    newcate: "",
  }
  orderCondition: any[] = [
    {
      id: "1",
      name: "Tin mới"
    },
    {
      id: "2",
      name: "Tin cũ "
    },
   
  ];
  constructor(
    private newsService: NewsService,
    private newcateService: NewcateService,
    //   private suppliersService: SuppliersService
  ) { }

  ngOnInit(): void {
    this.search();
    this.getnewCateData();

  }

  //------ get export data-----
  getnewCateData() {
    this.newcateService.all().subscribe(data => {
      this.newcate = data;
      // console.log(this.newcate);
    });
  }

  // ----end get export data-----


  //---start export data
  search() {
    console.log(this.filterObject);

    this.newsService.getAll(this.filterObject).subscribe(data => {
      this.news = data!;
    })
  }




  detele(item: any) {
    console.log("test", item.id);
    // lấy thông tin danh mục
    if(confirm('Bạn có chắc chắn muốn xoá không ?')){
    this.newsService.findById(item.id).subscribe(cate => {

      console.log(cate);
      this.newsService.delete(cate.id).subscribe(data => {

        this.search();
      });
    });}
  }

}
