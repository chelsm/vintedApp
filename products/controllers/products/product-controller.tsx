import express from "express";
var router = express.Router();
import {
    searchProducts,
    searchProductById,
    createNewProduct,
    modifyProduct,
    deleteProduct
} from "../../services/products/product-service";

router.get("/", async function (req, res, next) {
    const users = await searchProducts();
    res.send(users);
  });
  
  router.get("/:id", async function (req, res, next) {
    const user = await searchProductById(parseInt(req.params.id));
    res.send(user);
  });
  
  router.post("/", async function (req, res, next) {
    createNewProduct(req.body);
    res.send("product added");
  });
  
  router.put("/:id", async function (req, res, next) {
    modifyProduct(parseInt(req.params.id), req.body);
    res.send("product modified");
  });
  
  router.delete("/:id", function (req, res, next) {
    deleteProduct(parseInt(req.params.id));
    res.send("product deleted");
  });

export default router;
