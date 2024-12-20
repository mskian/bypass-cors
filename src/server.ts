import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import corsProxy from './routes/corsProxy';
import errorHandler from './utils/error';

const app: Application = express();
const PORT = process.env.PORT || 6028;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/api', corsProxy);

app.use(express.static('public'));

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Resource not found' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});