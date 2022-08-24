import express from "express";
const path = require("path");
const fs = require("fs");
const Router = express.Router();
//

//  функции
const getForms = (req: any, res: any) => {
  console.log(__dirname);
  return res.sendFile(path.resolve(__dirname, "../", "index.html"));
};
Router.route("/").get(getForms);
module.exports = Router;
