import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';    //to pass a stream of data



@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[];
  cartlist = new BehaviorSubject([])       

  constructor() { }

//add to cart
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);

//calling get total function
    let total=this.gettotal();
    console.log(total);
    
    
  }

  //total price

  gettotal(){
    var grandsum=0;
    this.cartarray.map((item:any)=>{
      grandsum+=item.price
    })
    return grandsum;
  }

  //remove itm from cart

  removecart(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1);
      }
    })
    // this.cartarray.filter((item:any,index:any)=>item.id!=product.id);

    this.cartlist.next(this.cartarray)    //remove and update
  
  }

 //remove all from the cart
  removeall(){
    this.cartarray=[];
    this.cartlist.next(this.cartarray)    //remove all

  }
}

