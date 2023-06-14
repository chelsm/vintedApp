import e from "express";
import db from "../../config/index";
import UserModel from "./UserRepositoryModel";

export const getAllUsers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (error, results) => {
      if (results.length == 0) {
        reject({ message: "Users not found", status: 404 });
      } else {
        let res = JSON.parse(JSON.stringify(results));
        resolve({ message: "Users found", data: res, status: 200 });
      }
    });
  }).catch((error) => {
    return error;
  });
};

export const getUserById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
      if (results.length == 0) {
        reject({ message: "User not found", status: 404 });
      } else {
        let res = JSON.parse(JSON.stringify(results));
        resolve({ message: "User found", data: res, status: 200 });
      }
    });
  }).catch((error) => {
    return error;
  });
};

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
};

export const modifyUserById = async (id: number, user: UserModel) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE users SET ? WHERE id = ?",
      [user, id],
      (error, results) => {
        if (error) {
          console.log("Erreur:", error);
          reject({ message: "User not modified", status: 404 });
        } else {
          resolve({ message: "User modified", status: 200 });
        }
      }
    );
  });
};

export const removeUserById = async (id: number) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM users WHERE id = ?", [id], (error, results) => {
      if (error) {
        console.log("Erreur:", error);
        reject({ message: "User not removed", status: 200 });
      } else {
        resolve({ message: "User removed", status: 200 });
      }
    });
  });
};
