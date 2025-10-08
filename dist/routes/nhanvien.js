"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nhanVienController_1 = require("../controllers/nhanVienController");
const router = express_1.default.Router();
// Routes cho CRUD
router.get('/', nhanVienController_1.NhanVienController.getList); // http://localhost:3000/
router.get('/add', nhanVienController_1.NhanVienController.getAdd); // http://localhost:3000/add
router.post('/add', nhanVienController_1.NhanVienController.postAdd);
router.get('/edit/:id', nhanVienController_1.NhanVienController.getEdit); // http://localhost:3000/edit/:id
router.post('/edit/:id', nhanVienController_1.NhanVienController.postEdit);
router.post('/delete/:id', nhanVienController_1.NhanVienController.postDelete);
exports.default = router;
