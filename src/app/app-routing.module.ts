import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import{LayoutComponent} from'../app/screens/admin/layout/layout.component';
import{DasboarchComponent} from'../app/screens/admin/dasboarch/dasboarch.component';
import{MosterListComponent}from'../app/screens/admin/moster/moster-list/moster-list.component';
import{MosterAddComponent}from'../app/screens/admin/moster/moster-add/moster-add.component';
import{MosterEditComponent}from'../app/screens/admin/moster/moster-edit/moster-edit.component';
import{CateMosterListComponent}from'../app/screens/admin/moster/category/cate-moster-list/cate-moster-list.component';
import{SuppliersListComponent}from'../app/screens/admin/moster/suppliers/suppliers-list/suppliers-list.component';
import{LayoutCliComponent}from'../app/screens/client/layout-cli/layout-cli.component'
import{HomeComponent}from'../app/screens/client/home/home.component'
import{ShopComponent}from'../app/screens/client/shop/shop.component'
import{ShopDetailComponent}from'../app/screens/client/shop-detail/shop-detail.component'
import { from } from 'rxjs';
const routes: Routes = [ 
  {
    path: "admin",
    component: LayoutComponent,

    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DasboarchComponent
      },
      {
        path: "category/mosterList",
        component: CateMosterListComponent
      },
      {
        path: "suppliers/suppliersList",
        component: SuppliersListComponent
      },
      {
        path: "moster/mosterList",
        component: MosterListComponent
      },
      {
        path: "moster/mosterAdd",
        component: MosterAddComponent
      }
     ,
      {
        path: "moster/mosterEdit/:id",
        component: MosterEditComponent
      }
     

    ]
  },
  {
    path:'',
    component:LayoutCliComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "shop",
        component: ShopComponent
      },
      {
        path: "shop/shopdetail/:id",
        component: ShopDetailComponent
      },
      {
        path: "moster/mosterList",
        component: MosterListComponent
      },
      {
        path: "moster/mosterAdd",
        component: MosterAddComponent
      }
     ,
      {
        path: "moster/mosterEdit/:id",
        component: MosterEditComponent
      }
     

    ]
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
