import express from "express";
const path = require("path");
const Router = express.Router();
// const getAuth = (req: any, res: any) => {
//   res.sendFile(path.resolve(__dirname, "", "index.html"));
// };
const getHomePage = (req: any, res: any) => {
  if (req.session.authenticated) {
    return res.sendFile(path.resolve(__dirname, "../", "index_forms.html"));
    // res.redirect("/forms");
  }
  return res.redirect("/forms");
};
Router.route("/").get(getHomePage);
module.exports = Router;
