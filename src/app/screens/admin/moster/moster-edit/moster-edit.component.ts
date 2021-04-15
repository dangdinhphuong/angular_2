import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../../../.././services/categorys.service';
import { SuppliersService } from '../../../../services/suppliers.service';
import { categories } from '../../../.././models/categories';
import { ProductsService } from '../../../../services/products.service';
import { suppliers } from '../../../.././models/suppliers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moster-edit',
  templateUrl: './moster-edit.component.html',
  styleUrls: ['./moster-edit.component.css']
})
export class MosterEditComponent implements OnInit {
  data!: any[];
  proId: Number = 0;
  cates: categories[] = [];
  suppli: suppliers[] = [];
  cateForm: FormGroup;
  images: String = "";
  myDate=  Date.now();
  downloadURL!: Observable<string>;
  constructor(
    private categoryService: CategorysService,
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private storage: AngularFireStorage,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.cateForm = this.createForm();
  }


  async ngOnInit() {
    await this.route.params.subscribe(param => {
      this.proId = param.id;
      console.log(param.id);
    });
    await this.productsService.findById(this.proId).subscribe(item => {

      this.cateForm.patchValue(
        {
          id: item.id,
          supplierId: item.supplierId,
          name: item.name,
          categoryId: item.categoryId,
          description: item.description,
          price: item.price,
          sale: item.sale,

        });
      this.images = item.image;

    });
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

    });
  }




  onSubmit(event: any) {

    const file = event.target[3].files[0];
    const filePath = `Products/${this.myDate}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Products/${this.myDate}`, file);
    // console.log(event.target[3].files[0].size);
    console.log(event.target[3].files[0]);
    if (file) {// file = true khi có up ảnh mới
      task
        .snapshotChanges().pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.cateForm.value.image = url;
            console.log('test1', this.cateForm.value.image);
            console.log(this.cateForm.value);


            this.productsService.put(this.cateForm.value).subscribe(item => {
              if (item != undefined) {
                this.router.navigate(['/admin/moster/mosterList']);
              }

            })
          });
        })
        ).subscribe(url => {
        });
    }
    else {
      this.cateForm.value.image = this.images;
      console.log('test1', this.cateForm.value.image);
      console.log(this.cateForm.value);


      this.productsService.put(this.cateForm.value).subscribe(item => {
        if (item != undefined) {
          this.router.navigate(['/admin/moster/mosterList']);
        }

      })
    }


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
