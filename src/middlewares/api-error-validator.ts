import { Request, Response, NextFunction } from 'express';
import ApiError from '@src/util/errors/api-error';

export interface HTTPError extends Error {
  status?: number;
}

export function apiErrorValidator(
  error: HTTPError,
  _: Partial<Request>,
  res: Response,
  __: NextFunction
): void {
  const errrCode = error.status || 500;
  const responseError = ApiError.format({
    code: errrCode,
    message: error.message,
  });
  res.status(errrCode).send(responseError);
}
