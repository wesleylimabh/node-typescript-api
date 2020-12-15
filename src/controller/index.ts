import { Response } from 'express';
import mongoose from 'mongoose';
import { CUSTOM_VALIDATION } from '@src/models/user';

interface ClientErrors {
  code: number;
  error: string;
}

export abstract class BaseController {
  protected sendCreatedUpdateErrorResponse(
    res: Response,
    error: mongoose.Error.ValidationError | Error
  ): void {
    if (error instanceof mongoose.Error.ValidationError) {
      const clientErrors = this.handleClientErrors(error);
      res.status(clientErrors.code).send(clientErrors);
    } else {
      res.status(500).send({ code: 500, error: 'Something went wrong!' });
    }
  }

  private handleClientErrors(
    error: mongoose.Error.ValidationError
  ): ClientErrors {
    if (this.isDuplicatedKindError(error)) {
      return { code: 409, error: error.message };
    }
    return { code: 422, error: error.message };
  }

  private isDuplicatedKindError(error: mongoose.Error.ValidationError) {
    const duplicatedKindErrors = Object.values(error.errors).filter(
      (err) => err.kind === CUSTOM_VALIDATION.DUPLICATED
    );
    return !!duplicatedKindErrors.length;
  }
}
