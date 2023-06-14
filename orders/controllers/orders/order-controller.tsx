import express from "express";
var router = express.Router();
import {
  searchOrders,
  searchOrderById,
  createNewOrder,
  modifyOrder,
  deleteOrder,
} from "../../services/orders/order-service";

router.get("/", async function (req, res, next) {
  const orders = await searchOrders();
  res.send(orders);
  next();
});

router.get("/:id", async function (req, res, next) {
  const order = await searchOrderById(parseInt(req.params.id));
  res.send(order);
});

router.post("/", async function (req, res, next) {
  const orders = await createNewOrder(req.body);
  res.send(orders);
});

router.put("/:id", async function (req, res, next) {
  modifyOrder(parseInt(req.params.id), req.body);
  res.send("order modified");
});

router.delete("/:id", function (req, res, next) {
  deleteOrder(parseInt(req.params.id));
  res.send("order deleted");
});

export default router;
