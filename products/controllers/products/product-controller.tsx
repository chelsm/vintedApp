import express from "express";
var router = express.Router();
import searchProducts from "../../services/products/product-service";

router.get('/', async function (req, res, next) {

    const products = await searchProducts();
    res.send(products);
});

export default router;
