import { ResponseError, ResponseStatusCode } from '../models/error';

export class ResponseValidationError extends Error {
  public statusCode: ResponseStatusCode;

  constructor(error: ResponseError) {
    super(error.message);

    this.statusCode = error.statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseValidationError);
    }
  }
}
