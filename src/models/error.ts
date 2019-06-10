export enum ResponseStatusCode {
  BadRequest = '400',
  Conflict = '409',
}

export interface ResponseError {
  message: string;
  statusCode: ResponseStatusCode;
}
