const {Router} = require('express');
const controller = require('../Controller/Controller');

const router = Router();

router.get('/', controller.getAllProducts);
router.get('/addToCart/:id',controller.addToCart);
router.get('/detail/:id',controller.getProductDetail);
router.get('/cart',controller.viewCart);

module.exports = router;
