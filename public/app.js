"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const fs = require("fs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}`));
const port = 3000;
console.log(path.resolve(`${__dirname}/index.html`));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index.html"));
});
app.post("/forms", (req, res) => {
    res.status(200).json({
        status: "succes",
        body: req.body,
    });
    console.log(req.body);
});
app.listen(port, () => {
    console.log(`server listening on port:${port}`);
});
