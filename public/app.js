"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const path = require("path");
// const session = require("express-session");
const fs = require("fs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(`${__dirname}`));
app.use(cookieParser());
const port = 3000;
const toursJson = JSON.parse(fs.readFileSync(`${path.join(__dirname, "../dev-data", "/AuthUser.json")}`));
console.log(toursJson);
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index.html"));
});
app.get("/forms", (req, res) => {
    res.sendFile(path.resolve(__dirname, "", "index_forms.html"));
    console.log(req.cookies);
});
app.post("/forms", (req, res) => {
    if (req.body.Login && req.body.Password && req.body.Repeat_password) {
        const newObg = Object.assign({ id: Math.random() }, req.body);
        toursJson.push(newObg);
        fs.writeFile(`${path.join(__dirname, "../dev-data", "/AuthUser.json")}`, JSON.stringify(toursJson), (err) => {
            res
                .status(201)
                .cookie("username", req.body.Login, { secure: true })
                .json({
                status: "success",
                body: { УСПЕШНО: toursJson },
            });
        });
    }
    else
        [
            res.status(404).json({
                status: "error",
                body: "Ошибка",
            }),
        ];
});
app.listen(port, () => {
    console.log(`server listening on port:${port}`);
});
