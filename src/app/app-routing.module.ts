import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'cart',component:CartComponent },
  { path:'shop/:id',component:ShopComponent },
  { path:'product-single/:id',component:ProductsingleComponent },
  { path:'checkout',component:CheckoutComponent },
  { path:'order',component:OrdersComponent },
  { path:'address',component:AddressComponent },
  { path:'profile-details',component:ProfileDetailsComponent },
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent },
  { path:'forgot-password',component:ForgotPasswordComponent },
  { path:'dashboard',component:DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
