"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const path = require("path");
const homePageRouter = require("./routes/homePageRouter");
const formsRouter = require("./routes/formsRouter");
// const session = require("express-session");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, "")));
// app.use(
//   session({
//     secret: "key that will sign our cookes",
//     resave: false,
//     saveUninitialized: false,
//   })
// );
const port = 3000;
app.use("/", formsRouter);
app.use("/", homePageRouter);
app.listen(port, () => {
    console.log(`server listening on port:${port}`);
});
