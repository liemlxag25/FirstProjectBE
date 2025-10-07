"use strict";
// import express, { Request, Response } from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = 3000;
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello,TypeScript with Express!');
// });
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const nhanvien_1 = __importDefault(require("./routes/nhanvien"));
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '..', 'src', 'views'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/nhanvien', nhanvien_1.default);
app.get('/', (req, res) => {
    res.redirect('/nhanvien');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
