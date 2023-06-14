import db from "../../config/index";
import UserModel from "./OrderRepositoryModel";

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

export const createOrder = async (order: UserModel) => {
  // const product =
  //   fetch(`http://localhost:3001/prducts/`)
  //   // .then((response) => response.json())
  //   .then((data) => {return data})
  //   .catch((error) => console.log(error));

  // console.log('product', product);

  return new Promise((resolve, reject) => {
    db.query("INSERT INTO orders SET ?", [order], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const modifyOrderById = async (id: number, order: UserModel) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE orders SET ? WHERE id = ?",
      [order, id],
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
