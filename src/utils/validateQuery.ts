import { Request, Response, NextFunction } from 'express';
import { validateUrl } from '../utils/validation';

const validateQuery = (
  req: Request<{}, {}, {}, Partial<{ url: string }>>,
  res: Response,
  next: NextFunction
): void => {
  const { url } = req.query;

  if (!url || !validateUrl(url)) {
    res.status(400).json({ error: 'Invalid URL format. Please provide a valid URL.' });
    return;
  }

  try {
    new URL(url);
  } catch {
    res.status(400).json({ error: 'Malformed URL. Please check your input.' });
    return;
  }

  next();
};

export default validateQuery;