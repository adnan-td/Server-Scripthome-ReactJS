const express = require("express");
const {
  httpGetAllusers,
  httpUpdateUser,
  httpAddNewUser,
  httpRemoveUser,
} = require("./users.controller");

const usersRouter = express.Router();

usersRouter.get("/", httpGetAllusers);
usersRouter.post("/", httpAddNewUser);
usersRouter.put("/:id", httpUpdateUser);
usersRouter.delete("/:id", httpRemoveUser);

module.exports = usersRouter;
