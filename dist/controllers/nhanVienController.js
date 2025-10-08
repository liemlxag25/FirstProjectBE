"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVienController = void 0;
const nhanvien_1 = require("../models/nhanvien");
class NhanVienController {
    static async getList(req, res) {
        const nhanViens = await nhanvien_1.NhanVienModel.find();
        res.render('list', { nhanViens });
    }
    static getAdd(req, res) {
        res.render('add');
    }
    static async postAdd(req, res) {
        const lastNhanVien = await nhanvien_1.NhanVienModel.findOne().sort({ id: -1 });
        const newId = lastNhanVien ? lastNhanVien.id + 1 : 1;
        const newNhanVien = new nhanvien_1.NhanVienModel({
            id: newId,
            ten: req.body.ten,
            tuoi: parseInt(req.body.tuoi),
            chucvu: req.body.chucvu,
        });
        await newNhanVien.save();
        res.redirect('/');
    }
    static async getEdit(req, res) {
        const id = parseInt(req.params.id);
        const nhanVien = await nhanvien_1.NhanVienModel.findOne({ id });
        if (nhanVien) {
            res.render('edit', { nhanVien });
        }
        else {
            res.status(404).send('Nhan vien not found');
        }
    }
    static async postEdit(req, res) {
        const id = parseInt(req.params.id);
        const updated = await nhanvien_1.NhanVienModel.findOneAndUpdate({ id }, {
            ten: req.body.ten,
            tuoi: parseInt(req.body.tuoi),
            chucvu: req.body.chucvu,
        }, { new: true });
        if (updated) {
            res.redirect('/');
        }
        else {
            res.status(404).send('Nhan vien not found');
        }
    }
    static async postDelete(req, res) {
        const id = parseInt(req.params.id);
        await nhanvien_1.NhanVienModel.deleteOne({ id });
        res.redirect('/');
    }
}
exports.NhanVienController = NhanVienController;
