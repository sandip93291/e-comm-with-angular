import { Component } from '@angular/core';
import { IProduct } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  message='';
  constructor (private SellerService:SellerService){}

  AddProduct(data:IProduct)
  {

   this.SellerService.AddProduct(data);
   this.SellerService.isAddProductError.subscribe((isError)=>{
    if(isError)
    {
      this.message="Product not added";
    }
    else{
      this.message="Product added succefuly"
    }

   })
  }
}
