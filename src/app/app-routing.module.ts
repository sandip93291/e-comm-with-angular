import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SellerAuthComponent} from './seller-auth/seller-auth.component'
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-add-product',
    component:AddProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'seller-show-product',
    component:ShowProductComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
