import { Identity } from '../models/general';

export function getNewId(
  itemsCount: number,
  // tslint:disable-next-line: trailing-comma
  deletedIds: string[]
) {
  return deletedIds.length ? deletedIds.shift() : (itemsCount + 1).toString();
}

export function isItemExists<T extends Identity>(id: string, items: T[]) {
  if (id) {
    return findItemById<T>(id, items);
  }
  return;
}

export function findItemById<T extends Identity>(id: string, items: T[]) {
  return items.find(item => item.id === id);
}

export function findItemIndex<T extends Identity>(id: string, items: T[]) {
  return items.findIndex(item => item.id === id);
}

export function isNumber(maybeNumber: string) {
  return  !isNaN(Number(maybeNumber));
}
