import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { NewcateService } from '../../../../services/newcate.service';
import { NewsService } from '../../../../services/news.service';
import { new_cate } from '../../../../models/new_cate';


@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.css']
})
export class NewEditComponent implements OnInit {

  proId: Number = 0;
  newcate: new_cate[] = [];
  myDate = Date.now();
  cateForm: FormGroup;
  image: String = "";
  downloadURL!: Observable<string>;
  constructor(
    private newcateService: NewcateService,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private storage: AngularFireStorage
    , private router: Router
  ) {

    this.cateForm = this.createForm();
  }

  async ngOnInit() {
    await this.route.params.subscribe(param => {
      this.proId = param.id;
      console.log(param.id);
    });
    await this.newsService.findById(this.proId).subscribe(item => {

      this.cateForm.patchValue(
        {
          id: item.id,
          newcateId: item.newcateId,
          name: item.name,
          description: item.description,
          detail:item.detail
        });
      this.image = item.image;

    });
    this.getnewCateData();

  }

  //---start export data
  getnewCateData() {
    this.newcateService.all().subscribe(data => {
      this.newcate = data;
      console.log(this.newcate);
    });
  }




  onSubmit(event: any) {
    const file = event.target[3].files[0];
    const filePath = `News/${this.myDate}`;
    const fileRef = this.storage.ref(filePath);
    
    console.log(this.cateForm.value);
    if (file) {// file = true khi có up ảnh mới
      const task = this.storage.upload(`News/${this.myDate}`, file);// up ảnh lên firebase
    task
      .snapshotChanges().pipe(finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.cateForm.value.image = url;
          console.log('test1', this.cateForm.value.image);

          this.cateForm.value.newcateId = parseInt(this.cateForm.value.newcateId);
          console.log(this.cateForm.value);
          this.newsService.put(this.cateForm.value).subscribe(item => {// neww sản phẩm
            if (item != undefined) {

              this.router.navigate(['/admin/new/newlist']);
            }

          })
        });
      })
      ).subscribe(url => {

      });}
      else{
        this.cateForm.value.image = this.image;
        this.cateForm.value.newcateId = parseInt(this.cateForm.value.newcateId);
        console.log(this.cateForm.value);
        this.newsService.put(this.cateForm.value).subscribe(item => {// neww sản phẩm
          if (item != undefined) {

            this.router.navigate(['/admin/new/newlist']);
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

        newcateId: new FormControl(0, [
          Validators.min(1),
        ]),
        description: new FormControl(''),
        image: new FormControl(''),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100)
        ]),
        detail: new FormControl('', [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(150)
        ])

      }
    );
  }
  get f() {
    return this.cateForm.controls;
  }
}
