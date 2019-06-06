import { Identity } from './general';

export interface Product extends Identity {
  name: string;
  categoryId: string;
  itemsInStock: number;
}
