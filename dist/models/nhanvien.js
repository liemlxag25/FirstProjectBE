"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVienModel = void 0;
const mongoose_1 = require("mongoose");
const nhanVienSchema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    ten: { type: String, required: true },
    tuoi: { type: Number, required: true },
    chucvu: { type: String, required: true },
});
exports.NhanVienModel = (0, mongoose_1.model)('NhanVien', nhanVienSchema);
