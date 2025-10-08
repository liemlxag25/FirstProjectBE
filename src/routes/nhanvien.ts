import express, { Router } from 'express';
import { NhanVienController } from '../controllers/nhanVienController';

const router: Router = express.Router();

// Routes cho CRUD
router.get('/', NhanVienController.getList);
router.get('/add', NhanVienController.getAdd); 
router.post('/add', NhanVienController.postAdd);
router.get('/edit/:id', NhanVienController.getEdit); 
router.post('/edit/:id', NhanVienController.postEdit);
router.post('/delete/:id', NhanVienController.postDelete);

export default router;