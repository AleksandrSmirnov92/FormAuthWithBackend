"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const Router = express_1.default.Router();
// const getAuth = (req: any, res: any) => {
//   res.sendFile(path.resolve(__dirname, "", "index.html"));
// };
const getHomePage = (req, res) => {
    if (req.session.authenticated) {
        return res.sendFile(path.resolve(__dirname, "../", "index_forms.html"));
        // res.redirect("/forms");
    }
    return res.redirect("/forms");
};
Router.route("/").get(getHomePage);
module.exports = Router;
