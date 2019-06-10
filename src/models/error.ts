export enum ResponseStatusCode {
  BadRequest = '400',
  Conflict = '409',
  NotFound = '404',
}

export interface ResponseError {
  message: string;
  statusCode: ResponseStatusCode;
}
