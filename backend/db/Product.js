const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    company:String,
    userId:String
})
const Product=mongoose.model('products',productSchema)

module.exports=Product