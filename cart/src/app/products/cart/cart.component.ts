import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartitems:any=[]   //cartitems

  grandTotal:any=0
  updateTotal:any
  constructor( private cart:CartService, private router:Router) { }

  ngOnInit(): void {

    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data
      }
    )
    
    this.grandTotal=this.cart.gettotal();
  }

  removeitem(product:any){
    this.cart.removecart(product)
    this.grandTotal=this.cart.gettotal();

  }

  removeall(){
    this.cart.removeall();

  }

  dicount3per(source:any){
    party.confetti(source)
    let discount=(this.grandTotal*3)/100;
    this.updateTotal=this.grandTotal-discount;
  }

  dicount10per(){
    let discount=(this.grandTotal*10)/100;
    this.updateTotal=this.grandTotal-discount;
  }
  dicount30per(){
    let discount=(this.grandTotal*30)/100;
    this.updateTotal=this.grandTotal-discount;
  }

  dicount50per(){
    let discount=(this.grandTotal*50)/100;
    this.updateTotal=this.grandTotal-discount;
  }

  proceed(){
    alert('Your order is placed')
    this.router.navigateByUrl('')
    this.removeall();
  }

  

}
