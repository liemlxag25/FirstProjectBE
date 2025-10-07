import { Request, Response } from 'express';
  import { NhanVien } from '../models/nhanvien';

  let nhanViens: NhanVien[] = [
    { id: 1, ten: 'Nguyen Van A', tuoi: 30, chucvu: 'Nhan vien' },
    { id: 2, ten: 'Tran Thi B', tuoi: 25, chucvu: 'Quan ly' },
  ];

  export class NhanVienController {
    static getList(req: Request, res: Response) {
      res.render('list', { nhanViens });
    }

    static getAdd(req: Request, res: Response) {
      res.render('add');
    }

    static postAdd(req: Request, res: Response) {
      const newNhanVien: NhanVien = {
        id: nhanViens.length + 1,
        ten: req.body.ten,
        tuoi: parseInt(req.body.tuoi),
        chucvu: req.body.chucvu,
      };
      nhanViens.push(newNhanVien);
      res.redirect('/nhanvien');
    }

    static getEdit(req: Request, res: Response) {
      const id = parseInt(req.params.id);
      const nhanVien = nhanViens.find((nv) => nv.id === id);
      if (nhanVien) {
        res.render('edit', { nhanVien });
      } else {
        res.status(404).send('Nhan vien not found');
      }
    }

    static postEdit(req: Request, res: Response) {
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
      } else {
        res.status(404).send('Nhan vien not found');
      }
    }

    // POST: Xóa nhân viên
    static postDelete(req: Request, res: Response) {
      const id = parseInt(req.params.id);
      nhanViens = nhanViens.filter((nv) => nv.id !== id);
      res.redirect('/nhanvien');
    }
  }