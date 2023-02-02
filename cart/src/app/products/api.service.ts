import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsComponent } from './products.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey= new BehaviorSubject('');

  constructor( private http:HttpClient) { }

getProducts(){
return this.http.get('http://localhost:3000/all-products')
}

  //add to to wishlist
addtowishlist(product:any){
  const body={
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    description: product.description,

  }
return this.http.post('http://localhost:3000/addtowishlist', body)

}

//get wishlist
getWishlist(){
  return this.http.get('http://localhost:3000/getWishlist')
  }


//
deletefromwish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+ id)
}

}
