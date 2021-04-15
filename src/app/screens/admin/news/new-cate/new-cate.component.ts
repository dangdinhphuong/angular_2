import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators} from '@angular/forms';
import{NewcateService} from'../../../../services/newcate.service';
import{new_cate} from'../../../../models/new_cate';
@Component({
  selector: 'app-new-cate',
  templateUrl: './new-cate.component.html',
  styleUrls: ['./new-cate.component.css']
})
export class NewCateComponent implements OnInit {
  // data!: any[];
  cateForm: FormGroup;
  newCate: new_cate[] = [];
  iseet:Number=0;
  editFrom: FormGroup;

  constructor( private newcateService:NewcateService) { 
    this.cateForm = this.createForm();
    this.editFrom=this.editterFrom();
  }


 
  ngOnInit(): void {
    this.getMenuData();
  }

//---start export data
  getMenuData(){
    this.newcateService.all().subscribe(data => {
      this.newCate = data;
      console.log(data);
       // sao data của m nó lại k ra cais nh
    });
  }

 //start submit from
 onSubmit(){
  this.newcateService.store(this.cateForm.value).subscribe(item=>{
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
  if(confirm('Bạn có chắc chắn muốn lưu ?')){
  this.newcateService.put(this.editFrom.value).subscribe(data => {
    // this.router.navigate(['/admin/danh-muc']);
    console.log(this.newcateService['API_URL']);
    this.editFrom = this.editterFrom();
    this.getMenuData();
    this.iseet=0;
  })}
}
// start detele obj







  detele(item:Number){
    // debugger;
    console.log("test",item);
    if(confirm('Bạn có chắc chắn muốn xoá không ?')){
    // lấy thông tin danh mục
    
    this.newcateService.findById(item).subscribe(cate => {
  
      console.log(cate);
      this.newcateService.delete(cate.id).subscribe(data=>{
        this.iseet=0;
        this.getMenuData();
      });
    });
  }
    // xóa danh mục
  }
}
