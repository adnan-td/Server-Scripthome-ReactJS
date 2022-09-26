const express = require("express");
// const { httpGetAllscripts, httpAddNewScript, httpAbortScript } = require("./scripts.controller");
const httpGetAllScripts = (req, res) => {
  res.send("Hellllo All scripts");
};

const httpGetScript = (req, res) => {
  res.send("Hellllo All scripts");
};

const httpUpdateScript = (req, res) => {
  res.send("Hellllo All scripts Update");
};

const httpAddNewScript = (req, res) => {
  res.send("Hellllo All scripts Add");
};

const httpAbortScript = (req, res) => {
  res.send("Hellllo All scripts Delete");
};

const scriptsRouter = express.Router();

scriptsRouter.get("/", httpGetAllScripts);
scriptsRouter.get("/:id", httpGetScript);
scriptsRouter.post("/", httpAddNewScript);
scriptsRouter.put("/:id", httpUpdateScript);
scriptsRouter.delete("/:id", httpAbortScript);

module.exports = scriptsRouter;
