import { Router, Request, Response } from 'express';
import axios from 'axios';
import UserAgent from 'user-agents';
import validateQuery from '../utils/validateQuery';
import { handleError } from '../utils/errorHandler';

interface BypassQuery {
  url: string;
}

const userAgent = new UserAgent();
const router = Router();

router.get(
  '/bypass',
  validateQuery,
  async (req: Request<{}, {}, {}, BypassQuery>, res: Response) => {
    const { url } = req.query;

    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': userAgent.toString(),
          'Origin': '*',
          'Accept': 'application/json, text/plain, */*',
          'Cache-Control': 'no-cache',
        },
      });
      res.status(200).json({
        status: response.status,
        //headers: response.headers,
        data: response.data,
      });
    } catch (error) {
      handleError(error, res);
    }
  }
);

export default router;
