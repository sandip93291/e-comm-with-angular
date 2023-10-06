import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menyType='normalUser'
  sellerName=''
  constructor (private route:Router){}
  ngOnInit():void{
    this.route.events.subscribe((value:any)=>{
      if(value.url)
      {
        if(value.url.includes('seller') && localStorage.getItem('seller'))
        {
          this.menyType='seller'
          console.log("in seller")
          if(localStorage.getItem('seller'))
          {
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore);
            this.sellerName=sellerData.username;
          }
          
  
        }
        else{
          console.log("in u")
          this.menyType='normalUser';
        }
      }
     

    })
  }

  logoutSeller(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
