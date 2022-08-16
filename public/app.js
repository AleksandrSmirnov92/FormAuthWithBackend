"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const session = require("express-session");
const fs = require("fs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}`));
app.use(session({
    secret: "key for our cookies ",
    resave: false,
    saveUninitialized: false,
}));
const port = 3000;
console.log(path.resolve(`${__dirname}/index.html`));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index.html"));
});
app.get("/forms", (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index_forms.html"));
});
app.post("/forms", (req, res) => {
    let b = req.body;
    console.log(b);
    let { Login, Password, Repeat_password, Email } = req.body;
    console.log(JSON.parse(Login));
    res.status(200).json({
        status: "succes",
        body: { УСПЕШНО: req.body },
    });
});
app.listen(port, () => {
    console.log(`server listening on port:${port}`);
});
