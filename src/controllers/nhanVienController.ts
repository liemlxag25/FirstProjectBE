import { Request, Response } from 'express';
import {NhanVienModel} from '../models/nhanvien';

export class NhanVienController {
  static async getList(req: Request, res: Response) {
    const nhanViens = await NhanVienModel.find();
    res.render('list', { nhanViens });
  }

  static getAdd(req: Request, res: Response) {
    res.render('add');
  }

  // static async postAdd(req: Request, res: Response) {
  //   const newNhanVien = new NhanVienModel({
  //     ten: req.body.ten,
  //     tuoi: Number(req.body.tuoi),
  //     chucvu: req.body.chucvu,
  //   });
  //   await newNhanVien.save();
  //   res.redirect('/');
  // }
  static async postAdd(req: Request, res: Response) {
    const lastNhanVien = await NhanVienModel.findOne().sort({ id: -1 });
    const newId = lastNhanVien ? lastNhanVien.id + 1 : 1;
    const newNhanVien = new NhanVienModel({
      id: newId,
      ten: req.body.ten,
      tuoi: parseInt(req.body.tuoi),
      chucvu: req.body.chucvu,
    });
    await newNhanVien.save();
    res.redirect('/');
  }

  static async getEdit(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const nhanVien = await NhanVienModel.findOne({ id });   
    res.render('edit', { nhanVien });
    
  }

  static async postEdit(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const updated = await NhanVienModel.findOneAndUpdate(
      { id },
      {
        ten: req.body.ten,
        tuoi: parseInt(req.body.tuoi),
        chucvu: req.body.chucvu,
      },
      { new: true }
    );
    res.redirect('/');
  }

  static async postDelete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await NhanVienModel.deleteOne({ id });
    res.redirect('/');
  }
}