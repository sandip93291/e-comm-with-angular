import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Route, Router } from '@angular/router';
import { ISellerSignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router){}

  authError:string='';
  isRegisterShowing=true;
  ngOnInit():void{
    this.seller.reloadSeller();

  }
  signup(data:ISellerSignUp):void{
   // console.log(data);
   this.authError=''
    this.seller.userSinupService(data);

  }

  toggleLoginRgister(){
    this.authError=''
    this.isRegisterShowing=!this.isRegisterShowing;
  }

  login(data:any)
  {
    this.authError=''
    this.seller.userLogin(data); 
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError)
      {
        this.authError="Erroe! UserName or Password are not correect"
      }
    })

  }
}
