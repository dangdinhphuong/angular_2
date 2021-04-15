import { Component, OnInit } from '@angular/core';
import {CategorysService} from'../../../../../services/categorys.service';
import{categories} from'../../../../.././models/categories';
// import { Router } from '@angular/router';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-cate-moster-list',
  templateUrl: './cate-moster-list.component.html',
  styleUrls: ['./cate-moster-list.component.css']
})
export class CateMosterListComponent implements OnInit {
  data!: any[];
  cateForm: FormGroup;
  cates: categories[] = [];
  iseet:Number=0;
  editFrom: FormGroup;
  name_edit:String="con co";
  constructor(
    private categoryService:CategorysService,
    //  private router: Router,
    
     ) { 
      this.cateForm = this.createForm();
     this.editFrom=this.editterFrom();
    
     }
  
  ngOnInit(): void {
    this.getMenuData();
  }

//---start export data
  getMenuData(){

    
    this.categoryService.all().subscribe(data => {
      this.cates = data;
      console.log(data);
       // sao data của m nó lại k ra cais nh
    });
  }
// ---end---- bh em muốn lấy thông của cái products trong cái mảng cate

  //start submit from
  onSubmit(){
    this.categoryService.store(this.cateForm.value).subscribe(item=>{
      if(item != undefined){
        this.cateForm = this.createForm();
        console.log(item.id);
       this.getMenuData();}
            
    })
  }
  createForm(){
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    });
  }
  get f(){
    return this.cateForm.controls;
  }
///----- end----


//start EDIT from

edit(cate: any){
  this.iseet = 1;
  this.editFrom.setValue({id: cate.id, name: cate.name});

}
editterFrom(){
  return new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  });
}
get e(){
  return this.editFrom.controls;
}
saveCate(event: any){
  event.preventDefault();
  this.categoryService.put(this.editFrom.value).subscribe(data => {
    // this.router.navigate(['/admin/danh-muc']);
    console.log(this.categoryService['API_URL']);
    this.editFrom = this.editterFrom();
    this.getMenuData();
    this.iseet=0;
  })
}
// start detele obj
detele(item:Number){
  // debugger;
  console.log("test",item);
  if(confirm('Bạn có chắc chắn muốn xoá không ?')){
  // lấy thông tin danh mục
  
  this.categoryService.findById(item).subscribe(cate => {

    console.log(cate);
    this.categoryService.delete(cate.id).subscribe(data=>{
      this.iseet=0;
      this.getMenuData();
    });
  });
}
  // xóa danh mục
}
}

