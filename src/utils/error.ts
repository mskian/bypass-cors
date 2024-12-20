import { Request, Response, NextFunction } from 'express';

export default (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error.message);
  console.error(error.stack); 
  res.status(500).json({ error: 'Internal Server Error' });
};