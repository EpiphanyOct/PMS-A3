import { Item } from './item';

export const data: Item[] = [
  new Item(
    Item.generateId(),
    'Laptop',
    'Electronics',
    10,
    1200,
    'Dell',
    'In Stock',
    true,
    'High performance'
  ),
  new Item(
    Item.generateId(),
    'Chair',
    'Furniture',
    5,
    80,
    'IKEA',
    'Low Stock',
    false,
    'Comfortable'
  ),
];