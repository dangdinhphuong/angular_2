import { Pipe,Component, OnInit } from '@angular/core';
import { CategorysService } from '../../../.././services/categorys.service';
import { SuppliersService } from '../../../../services/suppliers.service';
import { categories } from '../../../.././models/categories';
import { ProductsService } from '../../../../services/products.service';
import { suppliers } from '../../../.././models/suppliers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-moster-add',
  templateUrl: './moster-add.component.html',
  styleUrls: ['./moster-add.component.css']
})
export class MosterAddComponent implements OnInit {
  data!: any[];
  cates: categories[] = [];
  suppli: suppliers[] = [];
  myDate=  Date.now();
  cateForm: FormGroup;
  downloadURL!: Observable<string>;
  constructor(
    private categoryService: CategorysService,
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private storage: AngularFireStorage
    , private router: Router) {

    this.cateForm = this.createForm();
  }

  ngOnInit(): void {
    this.getCateData();
    this.getSuppliData();
   
  }

  //---start export data
  getCateData() {
    this.categoryService.all().subscribe(data => {
      this.cates = data;

    });
  }
  getSuppliData() {
    this.suppliersService.all().subscribe(data => {
      this.suppli = data;
      console.log(this.suppli);
    });
  }




  onSubmit(event: any) {
    const file = event.target[3].files[0];
    const filePath = `Products/${this.myDate}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Products/${this.myDate}`, file);
    task
      .snapshotChanges().pipe(finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.cateForm.value.image = url;
          console.log('test1', this.cateForm.value.image);   
          this.cateForm.value.supplierId=  parseInt(this.cateForm.value.supplierId);
          this.cateForm.value.categoryId=  parseInt(this.cateForm.value.categoryId);
          console.log(this.cateForm.value);
          this.productsService.store(this.cateForm.value).subscribe(item => {// neww sản phẩm
            if (item != undefined) {

              this.router.navigate(['/admin/moster/mosterList']);
            }

         })
        });
      })
      ).subscribe(url => {

      });
  }

  createForm() {
    return new FormGroup(
      {
        id: new FormControl(0, [
          Validators.required,

        ]),
        date: new FormControl(this.myDate),
      
        categoryId: new FormControl(0, [
          Validators.required,
          Validators.min(1),

        ]),
        supplierId: new FormControl(0, [
          Validators.required,
          Validators.min(1),
        ]),
        description: new FormControl(''),
        image: new FormControl(''),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]),
        price: new FormControl(10000, [
          Validators.required,
          Validators.min(10000),

        ])
        ,
        sale: new FormControl(0, [
          Validators.required,
          Validators.min(0),
          Validators.max(100),

        ])
      }
    );
  }
  get f() {
    return this.cateForm.controls;
  }

}
