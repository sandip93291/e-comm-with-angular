export interface ISellerSignUp{
    email:string,
    password:string,
    username:string
}
export interface ISellerLogin{
    password:string,
    username:string
}

export interface IProduct {
    Id:number,
    Name: string,
    Price: number,
    Color: string,
    Category: string,
    Description: string,
    Url: string
  }