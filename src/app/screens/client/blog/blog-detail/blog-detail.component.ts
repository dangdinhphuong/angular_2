import { Component, OnInit } from '@angular/core';
import { NewcateService } from '../../../../services/newcate.service';
import { NewsService } from '../../../../services/news.service';
import { new_cate } from '../../../../models/new_cate';
import { new_paper } from '../../../../models/new_paper';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  news: any;
  newcate: new_cate[] = [];
  item:any=0;
  proId: Number = 0;
  page: number = 1;
  constructor(private newsService: NewsService,
    private newcateService: NewcateService,private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.proId = params.id;
        this.newsService.findById(this.proId).subscribe(data => {
          this.news = data;
          console.log(this.news);
        });
      });
      this.getnewCateData();
   }
      
//------ get export data-----

getnewCateData() {
  this.newcateService.all().subscribe(data => {
    this.newcate = data;
    // console.log(this.newcate);
  });
}
}
