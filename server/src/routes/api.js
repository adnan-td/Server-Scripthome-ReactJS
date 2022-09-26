const express = require("express");
const usersRouter = require("./users/users.router");
const scriptsRouter = require("./scripts/scripts.router");

const api = express.Router();

api.delete("/logout", checkAuthenticated, (req, res) => {
  console.log("Logging Out");
  req.logOut(() => {});
  // res.redirect("/");
  res.send("Logged out successfully!");
});

api.get("/getuser", checkAuthenticated, (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

api.use("/users", usersRouter);
api.use("/scripts", scriptsRouter);

module.exports = api;

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
