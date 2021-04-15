import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { DasboarchComponent } from './screens/admin/dasboarch/dasboarch.component';
import { MosterListComponent } from './screens/admin/moster/moster-list/moster-list.component';
import { MosterAddComponent } from './screens/admin/moster/moster-add/moster-add.component';
import { MosterEditComponent } from './screens/admin/moster/moster-edit/moster-edit.component';
import { LayoutComponent } from './screens/admin/layout/layout.component';
import {CateMosterListComponent} from'./screens/admin/moster/category/cate-moster-list/cate-moster-list.component';
import { SuppliersListComponent } from './screens/admin/moster/suppliers/suppliers-list/suppliers-list.component';
import { LayoutCliComponent } from './screens/client/layout-cli/layout-cli.component';
import { HomeComponent } from './screens/client/home/home.component';
import { ShopComponent } from './screens/client/shop/shop.component';
import { ShopDetailComponent } from './screens/client/shop-detail/shop-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DasboarchComponent,
    MosterListComponent,
    MosterAddComponent,
    MosterEditComponent,
    LayoutComponent, 
    CateMosterListComponent, SuppliersListComponent, LayoutCliComponent, HomeComponent, ShopComponent, ShopDetailComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
