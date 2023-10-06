import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, ISellerLogin, ISellerSignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);
  isAddProductError=new EventEmitter<boolean>(false);

  output = {};
  constructor(private http: HttpClient, private router: Router) {}
  userSinupService(data: ISellerSignUp) {
    // console.log("jfh");
    return this.http
      .post('http://localhost:60762/Service1.svc/seller-rgister', data, {
        observe: 'response',
      })
      .subscribe((result) => {
        this.isSellerLogedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.output = JSON.stringify(result.body);
        //console.log(this.output.IsSuccess)
        this.router.navigate(['seller-home']);
      });
  }

  userLogin(data: ISellerLogin) {
    return this.http
      .post('http://localhost:60762/Service1.svc/seller-login', data, {
        observe: 'response',
      })
      .subscribe((result: any) => {
        if (result && result.body) {
          if (result.body.IsSuccess) {
            this.isSellerLogedIn.next(true);
            localStorage.setItem('seller', JSON.stringify({username:data.username}));
            this.output = JSON.stringify(result.body);
            //console.log(this.output.IsSuccess)
            this.router.navigate(['seller-home']);
          } else {
            this.isLoginError.emit(true);
          }
        } else {
          this.isLoginError.emit(true);
        }
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLogedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }


  AddProduct(data: IProduct) {
    return this.http
      .post('http://localhost:60762/Service1.svc/add-product', data, {
        observe: 'response',
      })
      .subscribe((result: any) => {
        if (result && result.body) {
          if (result.body.IsSuccess) {
            this.isAddProductError.emit(false);
            
         
          } else {
            this.isAddProductError.emit(true);
          }
        } else {
          this.isAddProductError.emit(true);
        }
      });
  }
  GetAllProduct():IProduct[]{
    let response:IProduct[]=[];
    this.http
      .get('http://localhost:60762/Service1.svc/get-all-product', {
        observe: 'response',
      })
      .subscribe((result: any) => {
        if (result && result.body) {
          if (result.body) {
            console.log(result.body);
            
            
         
          } else {
          }
        } else {
          
        }
      });

    return response;

  }
}
