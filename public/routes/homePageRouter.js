"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require("path");
const Router = express_1.default.Router();
const fs = require("fs");
const toursJson = JSON.parse(fs.readFileSync(`${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`));
const getHomePage = (req, res) => {
    // if (req.session.authenticated) {
    return res.sendFile(path.resolve(__dirname, "../", "index_forms.html"));
    // res.redirect("/forms");
    // }
    // return res.redirect("/forms");
};
const postHomePage = (req, res) => {
    if (req.body.Login && req.body.Password && req.body.Repeat_password) {
        const newObg = Object.assign({ id: Math.random() }, req.body);
        toursJson.push(newObg);
        for (let item of toursJson) {
            if (item.Login === req.body.Login) {
                const name = "такой пользователь уже существует ";
                return res.status(400).json({
                    status: "error",
                    message: "Такой пользователь уже существует",
                });
                // Нужно добавить редирект на страничку регистрации
            }
            else {
                // if (req.session.authenticated) {
                //   return res.json({ sessions: req.session });
                // Если ссесия существует то этот ответ
            }
            // else {
            //   req.session.authenticated = true;
            //   req.session.user = {
            //     login: req.body.Login,
            //   };
            //   return res.json(req.session);
            // Если сессия не существует то этот ответ
            // }
            // fs.writeFile(
            //   `${path.join(__dirname, "../../dev-data", "/AuthUser.json")}`,
            //   JSON.stringify(toursJson),
            //   (err: Error) => {
            //     res
            //       .status(201)
            //       .cookie("username", req.body.Login, { secure: true })
            //       .json({
            //         status: "success",
            //         body: { УСПЕШНО: toursJson },
            //       });
            //   }
            // );
        }
    }
};
//  else
//   [
//     res.status(404).json({
//       status: "error",
//       body: "Ошибка форма не до конца заполнена",
//     }),
//   ];
// };
Router.route("/").get(getHomePage).post(postHomePage);
module.exports = Router;
