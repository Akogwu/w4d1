const Cart = require('../model/Cart');
const Product = require('../model/Product');

exports.getAllProducts = (req, res, next) =>{
    res.render('home',{products:Product.getProducts(), inCart:Cart.getCart(), cartTotal:(Cart.getCart())?Cart.getCart().products.length:0})
}

exports.getProductDetail = (req,res) => {
    const product = Product.getProducts(req.params.id);
    res.render('detail',{ product: product[0] })
}

exports.viewCart = (req,res)=>{
    res.render('cart',{cart:Cart.getCart(),inCart:Cart.getCart(),products:Product.getProducts(), cartTotal:(Cart.getCart())?Cart.getCart().products.length:0})
}

exports.addToCart =(req,res) =>{
    let product = req.session.cart[req.params.id] = Product.getProduct(req.params.id)[0];
    Cart.add(product);
    res.redirect(303,'/cart');
}