import e from "express";
import db from "../../config/index";
import UserModel from "./UserRepositoryModel";

export const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.log("Erreur:", error);
            reject(error);
          } else {
            resolve(results);
          }
    });
  });
};

export const getUserById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}


export const createUser = async (user: UserModel) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users SET ?", [user], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export const modifyUserById = async (id:number, user: UserModel) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE users SET ? WHERE id = ?", [user, id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

export const removeUserById = async (id:number) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}