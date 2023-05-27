import express, { type Express, type Request, type Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ?? 3000;

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// you can create your own route files in route directory
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT} ⚡`);
});
