"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const Router = express_1.default.Router();
const getAuth = (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index.html"));
};
Router.route("/").get(getAuth);
module.exports = Router;
