"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const nhanvien_1 = __importDefault(require("./routes/nhanvien"));
const app = (0, express_1.default)();
const port = 3000;
// Kết nối MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/nhanvien_db', {}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// Middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', nhanvien_1.default);
app.get('/', (req, res) => {
    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
