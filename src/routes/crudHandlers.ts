import { ResponseStatusCode } from '../models/error';
import { Identity } from '../models/general';
import { Request, Response, NextFunction } from 'express';
import { findItemIndex, findItemById, getNewId } from '../utils/general.utils';
import { ResponseValidationError } from '../errors/responseValidationError';

export function deleteItem<T extends Identity>(
  request: Request,
  response: Response,
  next: NextFunction,
  items: T[],
) {
  const id = request.params.id;
  const itemToDeleteIndex = findItemIndex(id, items);

  if (itemToDeleteIndex === -1) {
    next(
      new ResponseValidationError({
        statusCode: ResponseStatusCode.NotFound,
        message: `The item id ${id} is not found.`,
      }),
    );
  }

  items.splice(itemToDeleteIndex, 1);
  response.sendStatus(204);
  next();
}

export function updateItem<T extends Identity>(
  request: Request,
  response: Response,
  next: NextFunction,
  items: T[],
) {
  const id = request.params.id;
  const maybeItem = findItemById(id, items);

  if (!maybeItem) {
    next(
      new ResponseValidationError({
        statusCode: ResponseStatusCode.NotFound,
        message: `The item id ${id} is not found.`,
      }),
    );
  }

  const item = request.body;

  Object.assign(maybeItem, item);
  response.status(200).send(item);
  next();
}

export function createItem<T extends Identity>(
  request: Request,
  response: Response,
  items: T[],
  deletedItemsIds: string[],
) {
  const item = request.body;

  item.id = getNewId(items.length, deletedItemsIds) || '';
  items.push(item);
  response.status(201).send(item);
}

export function getItemById<T extends Identity>(
  request: Request,
  response: Response,
  next: NextFunction,
  items: T[],
) {
  const id = request.params.id;
  const item = findItemById(id, items);

  if (!item) {
    next(
      new ResponseValidationError({
        statusCode: ResponseStatusCode.NotFound,
        message: `The item id ${id} is not found.`,
      }),
    );
  }

  response.send(item);
  next();
}
