import { Response } from 'express';

export const handleError = (error: unknown, res: Response): Response => {
  console.error('Unexpected Error:', error);

  return res.status(500).json({
    error: 'Internal Server Error',
    details: error instanceof Error ? error.message : 'Unknown error occurred.',
  });
};
