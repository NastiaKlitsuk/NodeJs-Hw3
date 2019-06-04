export function getNewId(
  itemsCount: number,
  // tslint:disable-next-line: trailing-comma
  deletedIds: string[]
) {
  return deletedIds.length ? deletedIds.shift() : (itemsCount + 1).toString();
}
