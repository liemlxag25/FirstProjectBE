import { Schema, model } from 'mongoose';

export interface NhanVien {
  id: number;
  ten: string;
  tuoi: number;
  chucvu: string;
}

const nhanVienSchema = new Schema<NhanVien>({
  id: { type: Number, required: true, unique: true },
  ten: { type: String, required: true },
  tuoi: { type: Number },
  chucvu: { type: String, required: true },
});

export const NhanVienModel = model<NhanVien>('NhanVien', nhanVienSchema);