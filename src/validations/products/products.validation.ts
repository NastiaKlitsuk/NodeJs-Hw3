import { Response } from 'express';
import { send404, send400, send409 } from '../../utils/http.utils';

export function send409ForInvalidProductName(
  productName: string,
  response: Response,
) {
  if (productName.length < 3) {
    send409(response);
    return true;
  }
  return false;
}

export function isProductIdNumber(id: string) {
  const isNumber = Number(id);
  return isNumber;
}
