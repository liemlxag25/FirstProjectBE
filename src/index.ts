import express, { Request, Response } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import nhanVienRoutes from './routes/nhanvien';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/nhanvien_db', {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));

app.use('/', nhanVienRoutes);

app.get('/', (req: Request, res: Response) => {
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});