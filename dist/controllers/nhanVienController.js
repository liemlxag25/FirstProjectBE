"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVienController = void 0;
// Dữ liệu tạm (in-memory)
let nhanViens = [
    { id: 1, ten: 'Nguyen Van A', tuoi: 30, chucvu: 'Nhan vien' },
    { id: 2, ten: 'Tran Thi B', tuoi: 25, chucvu: 'Quan ly' },
];
class NhanVienController {
    // GET: Danh sách nhân viên
    static getList(req, res) {
        res.render('list', { nhanViens });
    }
    // GET: Trang thêm nhân viên
    static getAdd(req, res) {
        res.render('add');
    }
    // POST: Thêm nhân viên mới
    static postAdd(req, res) {
        const newNhanVien = {
            id: nhanViens.length + 1,
            ten: req.body.ten,
            tuoi: parseInt(req.body.tuoi),
            chucvu: req.body.chucvu,
        };
        nhanViens.push(newNhanVien);
        res.redirect('/nhanvien');
    }
    // GET: Trang sửa nhân viên
    static getEdit(req, res) {
        const id = parseInt(req.params.id);
        const nhanVien = nhanViens.find((nv) => nv.id === id);
        if (nhanVien) {
            res.render('edit', { nhanVien });
        }
        else {
            res.status(404).send('Nhan vien not found');
        }
    }
    // POST: Cập nhật nhân viên
    static postEdit(req, res) {
        const id = parseInt(req.params.id);
        const nhanVienIndex = nhanViens.findIndex((nv) => nv.id === id);
        if (nhanVienIndex !== -1) {
            nhanViens[nhanVienIndex] = {
                id,
                ten: req.body.ten,
                tuoi: parseInt(req.body.tuoi),
                chucvu: req.body.chucvu,
            };
            res.redirect('/nhanvien');
        }
        else {
            res.status(404).send('Nhan vien not found');
        }
    }
    // POST: Xóa nhân viên
    static postDelete(req, res) {
        const id = parseInt(req.params.id);
        nhanViens = nhanViens.filter((nv) => nv.id !== id);
        res.redirect('/nhanvien');
    }
}
exports.NhanVienController = NhanVienController;
