import { Item } from "./item";

export function validateItem(item: Item): boolean {
    return (
      item.name.trim() !== '' &&
      item.category.trim() !== '' &&
      item.quantity >= 0 &&
      item.price >= 0 &&
      item.supplier.trim() !== '' &&
      ['In Stock', 'Low Stock', 'Out of Stock'].includes(item.stockStatus)
    );
  }
  
  export function searchItems(items: Item[], name: string): Item[] {
    return items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
  }