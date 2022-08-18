import express from "express";
const path = require("path");
const Router = express.Router();
const getAuth = (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "", "index.html"));
};
Router.route("/").get(getAuth);
module.exports = Router;
