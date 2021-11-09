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


import { LoginComponent } from './screens/client/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
  LoginComponent, 
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
    NgxPaginationModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
