import db from "../../config/index";

const getAllProducts = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (error, results) => {
        if (error) {
            console.log("Erreur:", error);
            reject(error);
          } else {
            console.log(results, "hehe")
            resolve(results); 
          }
    });
  });
};

export default getAllProducts;