import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders  } from './index';
import { BackendService } from './service/backend.service';

import { JpImagePreloadModule } from '@jaspero/ng-image-preload';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UpdateuserdetailComponent } from './components/updateuserdetail/updateuserdetail.component';
import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { HelpComponent } from './components/help/help.component';
import { PageloaderComponent } from './components/pageloader/pageloader.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DialogboxComponent,
    UserdetailComponent,
    UpdateuserdetailComponent,
    ListComponent,
    ProductComponent,
    PagenotfoundComponent,
    CartComponent,
    OrderComponent,
    HelpComponent,
    PageloaderComponent,
    WishlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JpImagePreloadModule.forRoot(),
  ],
  providers: [BackendService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
