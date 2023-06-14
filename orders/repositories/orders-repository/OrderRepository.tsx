import db from "../../config/index";
import OrderModel from "./OrderRepositoryModel";
import axios from "axios";

export const getAllOrders = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM orders", (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const getOrderById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM orders WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const createOrder = async (order: OrderModel) => {
  const priceDev = await getDeliveryPrice(order.product_id);
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO orders SET ?",
      [{ ...order, price: priceDev }],
      (error, results) => {
        if (error) {
          console.log("Erreur:", error);
          reject(error);
        } else {
          console.log("results", results);
          resolve(results);
        }
      }
    );
  });
};

export const modifyOrderById = async (id: number, order: OrderModel) => {
  const priceDev = await getDeliveryPrice(order.product_id);
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE orders SET ? WHERE id = ?",
      [{ ...order, price: priceDev }, id],
      (error, results) => {
        if (error) {
          console.log("Erreur:", error);
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
};

export const removeOrderById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM orders WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getDeliveryPrice = async (id: number) => {
  const priceDev = 2;
  const product = await axios
    .get(`http://localhost:3001/products/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  const totalPrice = priceDev + product[0].price;
  return totalPrice;
};
