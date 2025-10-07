// import express, { Request, Response } from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello,TypeScript with Express!');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
import express, { Request, Response } from 'express';
import path from 'path';
import nhanVienRoutes from './routes/nhanvien';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views'));

app.use(express.urlencoded({ extended: true }));

app.use('/nhanvien', nhanVienRoutes);

app.get('/', (req: Request, res: Response) => {
  res.redirect('/nhanvien');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});