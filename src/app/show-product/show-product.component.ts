import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent {
  constructor(private Seller:SellerService){}
  ngOnInit():void{
  
  }

  show(){
    this.Seller.GetAllProduct();

  }

}
