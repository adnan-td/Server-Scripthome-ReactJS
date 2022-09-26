const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const api = require("./routes/api");
const initializePassport = require("./passport-config");
const { getUserbyEmail, getUserbyID } = require("./models/users.model");
const app = express();
require("dotenv").config();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("combined"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.session());
app.use(passport.initialize());
initializePassport(passport, getUserbyEmail, getUserbyID);

app.use(methodOverride("_method"));
app.use(flash());

app.post("/request/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
});

app.use("/request/", api);

app.use("/admin/", checkAuthenticated);
app.use("/admin/", express.static(path.join(__dirname, "..", "admin", "build")));
app.get("/admin/*", checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "admin", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "..", "scripthome", "build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "scripthome", "build", "index.html"));
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = app;

// const helmet = require("helmet");
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.crossOriginEmbedderPolicy());
// app.use(helmet.crossOriginOpenerPolicy());
// app.use(helmet.crossOriginResourcePolicy());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.originAgentCluster());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());
