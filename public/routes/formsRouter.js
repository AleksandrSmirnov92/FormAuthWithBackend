"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const fs = require("fs");
const Router = express_1.default.Router();
//
//  функции
const getForms = (req, res) => {
    console.log(__dirname);
    return res.sendFile(path.resolve(__dirname, "../", "index.html"));
};
Router.route("/").get(getForms);
module.exports = Router;
