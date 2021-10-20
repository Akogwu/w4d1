let products = [
    {
        id:1,
        title:"stylish chair",
        price:200,
        imgUrl:"arrivals4.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:0
    },
    {
        id:2,
        title:"mapple wood dinning table",
        price:140,
        imgUrl:"arrivals7.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:1
    },
    {
        id:3,
        title:"wooden bed",
        price:280,
        imgUrl:"arrivals8.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:1,
        qty:0
    },
];

exports.getProduct = (id) =>{
    return products.filter(p => p.id === parseInt(id));
}

exports.getProducts = () => {
    return products;
}
