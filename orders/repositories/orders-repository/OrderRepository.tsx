import db from "../../config/index";
import OrderModelGet from "./OrderRepositoryModel";
import OrderModel from "./OrderRepositoryModel";
import axios from "axios";

export const getAllOrders = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM orders", (error, results) => {
      if (results.length == 0) {
        reject({ message: "orders not found", status: 404 });
      } else {
        let res: OrderModel[] = JSON.parse(JSON.stringify(results));
        resolve({ message: "Orders found", data: res, status: 200 });
      }
    });
  }).catch((error) => {
    return error;
  });
};

export const getOrderById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM orders WHERE id = ?", [id], (error, results) => {
      if (results.length == 0) {
        reject({ message: "order not found", status: 404 });
      } else {
        let res: OrderModel[] = JSON.parse(JSON.stringify(results));
        resolve({ message: "Order found", data: res, status: 200 });
      }
    });
  }).catch((error) => {
    return error;
  });
};

export const createOrder = async (order: OrderModelGet) => {
  const priceDev = await getDeliveryPrice(order.product_id);
  const [existsReceiver, existsSender] = await Promise.all([
    existsUser(order.user_receiver),
    existsUser(order.user_sender),
  ]);
  if (existsReceiver && existsSender) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO orders SET ?",
        [{ ...order, price: priceDev }],
        (error, results) => {
          if (error) {
            reject({ message: "Order not created", status: 404 });
          } else {
            resolve({ message: "Order created", status: 200 });
          }
        }
      );
    }).catch(() => {
      return { message: "error", status: 404 };
    });
  } else {
    return { message: "user not exist", status: 404 };
  }
};

export const modifyOrderById = async (id: number, order: OrderModelGet) => {
  const priceDev = await getDeliveryPrice(order.product_id);
  const [existsReceiver, existsSender] = await Promise.all([
    existsUser(order.user_receiver),
    existsUser(order.user_sender),
  ]);
  if (existsReceiver && existsSender) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE orders SET ? WHERE id = ?",
        [{ ...order, price: priceDev }, id],
        (error, results) => {
          if (error) {
            reject({ message: "Order not modify", status: 404 });
          } else {
            resolve({ message: "Order modify", status: 200 });
          }
        }
      ).catch(() => {
        return { message: "error", status: 404 };
      });
    });
  } else {
    return { message: "user not exist", status: 404 };
  }
};

export const removeOrderById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM orders WHERE id = ?", [id], (error, results) => {
      if (error) {
        reject({ message: "error delete order", status: 404 });
      } else {
        resolve({ message: "delete success", status: 200 });
      }
    });
  });
};

const getDeliveryPrice = async (id: number) => {
  const priceDelivery = 2;
  const product = await axios
    .get(`http://localhost:3001/products/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return priceDelivery + product.data[0].price;
};

const existsUser = async (id: number) => {
  const users = await axios
    .get(`http://localhost:3000/users/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return users.data.length > 0;
};
