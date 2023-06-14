import axios from "axios";
import db from "../../config/index";
import ProductModel from "./ProductRepositoryModel";

export const getAllProducts = async () => {

  /*const id = 1;
  axios.get(`http://localhost:3000/users/${id}`)
  .then(function (response) {
    // handle success
    console.log(response.data, "response");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });*/

  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const getProductById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const createProduct = async (product: ProductModel) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO products SET ?", [product], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

export const modifyProductById = async (id: number, product: ProductModel) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET ? WHERE id = ?",
      [product, id],
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

export const removeProductById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
