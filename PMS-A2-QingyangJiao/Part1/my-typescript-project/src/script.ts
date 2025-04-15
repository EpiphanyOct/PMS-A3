import { Item } from './item';
import { data } from './data';
import { validateItem, searchItems } from './utils.ts';
import { updateUI, updateFeaturedItems, displayMessage } from './ui';

let items = data;

function addItem(event: Event): void {
  event.preventDefault();
  const itemName = (document.getElementById('itemName') as HTMLInputElement).value;
  const itemCategory = (document.getElementById('itemCategory') as HTMLSelectElement).value;
  const itemQuantity = (document.getElementById('itemQuantity') as HTMLInputElement).valueAsNumber;
  const itemPrice = (document.getElementById('itemPrice') as HTMLInputElement).valueAsNumber;
  const itemSupplier = (document.getElementById('itemSupplier') as HTMLInputElement).value;
  const itemStockStatus = (document.getElementById('itemStockStatus') as HTMLSelectElement).value;
  const itemFeatured = (document.getElementById('itemFeatured') as HTMLInputElement).checked;
  const itemSpecialNote = (document.getElementById('itemSpecialNote') as HTMLInputElement).value;

  const newItem = new Item(
    Item.generateId(),
    itemName,
    itemCategory,
    itemQuantity,
    itemPrice,
    itemSupplier,
    itemStockStatus,
    itemFeatured,
    itemSpecialNote
  );

  if (validateItem(newItem)) {
    items.push(newItem);
    updateUI(items);
    updateFeaturedItems(items);
    displayMessage('Item added successfully!');
  } else {
    displayMessage('Invalid item data');
  }
}

function deleteItem(): void {
  const itemName = prompt('Enter item name to delete:');
  if (itemName) {
    const itemIndex = items.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
      if (confirm(`Are you sure you want to delete ${itemName}?`)) {
        items.splice(itemIndex, 1);
        updateUI(items);
        updateFeaturedItems(items);
        displayMessage('Item deleted successfully!');
      }
    } else {
      displayMessage('Item not found');
    }
  }
}

function searchItem(): void {
  const itemName = prompt('Enter item name to search:');
  if (itemName) {
    const foundItems = searchItems(items, itemName);
    if (foundItems.length > 0) {
      updateUI(foundItems);
    } else {
      displayMessage('No items found');
    }
  }
}

document.getElementById('itemForm')!.addEventListener('submit', addItem);
document.getElementById('deleteItem')!.addEventListener('click', deleteItem);
document.getElementById('searchItem')!.addEventListener('click', searchItem);

// Initialize the UI with existing items
updateUI(items);
updateFeaturedItems(items);