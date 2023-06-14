import express from "express";
var router = express.Router();
import {
  searchUsers,
  searchUserById,
  createNewUser,
  modifyUser,
  deleteUser,
} from "../../services/users/user-service";

router.get("/", async function (req, res, next) {
  const users = await searchUsers();
  res.send(users);
});

router.get("/:id", async function (req, res, next) {
  const user = await searchUserById(parseInt(req.params.id));
  res.send(user);
});

router.post("/", async function (req, res, next) {
  createNewUser(req.body);
  res.send("user added");
});

router.put("/:id", async function (req, res, next) {
  modifyUser(parseInt(req.params.id), req.body);
  res.send("user modified");
});

router.delete("/:id", function (req, res, next) {
  deleteUser(parseInt(req.params.id));
  res.send("user deleted");
});

export default router;
