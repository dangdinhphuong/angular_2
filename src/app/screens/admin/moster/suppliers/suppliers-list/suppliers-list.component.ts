import { Component, OnInit } from '@angular/core';
import {SuppliersService} from'../../../../../services/suppliers.service';
import{suppliers} from'../../../../.././models/suppliers';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {
  data!: any[];
  cateForm: FormGroup;
  supplis: suppliers[] = [];
  iseet:Number=0;
  editFrom: FormGroup;
  name_edit:String="con co";

  constructor(  private suppliersService:SuppliersService) {
    this.cateForm = this.createForm();
    this.editFrom=this.editterFrom();
   }

  ngOnInit(): void {
    this.getMenuData();
  }

//---start export data
  getMenuData(){
    this.suppliersService.all().subscribe(data => {
      this.supplis = data;
      console.log(this.supplis);
    });
  }
  //start submit from
  onSubmit(){
    this.suppliersService.store(this.cateForm.value).subscribe(item=>{
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
        Validators.maxLength(30)
      ])
    });
  }
  get f(){
    return this.cateForm.controls;
  }



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
  this.suppliersService.put(this.editFrom.value).subscribe(data => {
    // this.router.navigate(['/admin/danh-muc']);
    console.log(this.suppliersService['API_URL']);
    this.editFrom = this.editterFrom();
    this.getMenuData();
    this.iseet=0;
  })
}


// start detele obj
detele(item:any){
  // debugger;
  // console.log("test",item.products.length);
  // lấy thông tin danh mục
  if(confirm('Bạn có chắc chắn muốn xoá không ?')){
  this.suppliersService.findById(item.id).subscribe(cate => {
    console.log(cate);
    this.suppliersService.delete(cate.id).subscribe(data=>{
      this.iseet=0;
      this.getMenuData();
    });
  });
  // xóa danh mục
}}
}
