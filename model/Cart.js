let cart = null;


exports.add = (product) =>{

    if (cart ===null){
        cart = {products:[],total:0}
    }
    const indexExist = cart.products.findIndex(p => p.id === parseInt(product.id));
    if (indexExist>=0){
        product.qty+=1;
        cart.total+=product.price;
    }else {
        cart.products.push(product);
        product.qty = 1;
    }

}

exports.getCart = () => {
    return cart;
}