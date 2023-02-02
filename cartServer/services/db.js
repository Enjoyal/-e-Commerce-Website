// import mongoose

const mongoose = require('mongoose');

//2 define connection storing

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to MongoDB');
})

//3model creation 
const Product= mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})
// Create a model for wishlist
const Wishlist= mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    image:String,
    description:String,
})

//4 export

module.exports={
    Product,
    Wishlist
}