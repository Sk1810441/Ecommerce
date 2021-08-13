import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { UpdateuserdetailComponent } from './components/updateuserdetail/updateuserdetail.component';
import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { HelpComponent } from './components/help/help.component';
import { WishlistComponent } from './components/wishlist/wishlist.component'


const routes: Routes = [
  { path: 'home',component: HomeComponent },

  { path: 'register',component: RegisterComponent },

  { path: 'login',component: LoginComponent },

 // { path: 'login/:productid',component: LoginComponent },

  { path: 'forgotpassword',component: ForgotpasswordComponent },

  { path: 'userdetail',component: UserdetailComponent },

  { path: 'updateuserdetail',component: UpdateuserdetailComponent},

  { path: 'list/:categoryid',component: ListComponent},

  { path: 'cart',component: CartComponent},

  { path: 'order',component: OrderComponent},

  { path: 'wishlist',component: WishlistComponent},

  { path: 'help',component: HelpComponent},

  { path: 'product/:productid',component: ProductComponent},

  { path: '',redirectTo: '/home',pathMatch: 'full'},

//  { path: '**', redirectTo: 'home' },

  { path: '**',component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
