import { Response } from 'express';

export function send201(response: Response) {
  return response.sendStatus(201);
}

export function send404(response: Response) {
  return response.sendStatus(404);
}

export function send400(response: Response) {
  return response.sendStatus(400);
}

export function send409(response: Response) {
  return response.sendStatus(409);
}

export function send204(response: Response) {
  return response.sendStatus(204);
}
