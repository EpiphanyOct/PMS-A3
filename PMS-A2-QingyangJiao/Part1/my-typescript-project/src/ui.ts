import { Item } from "./item";

export function updateUI(items: Item[]): void {
    const itemList = document.getElementById('itemList')!;
    itemList.innerHTML = '';
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'item';
      itemElement.innerHTML = `
        Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity},
        Price: ${item.price}, Supplier: ${item.supplier}, Stock Status: ${item.stockStatus},
        Featured: ${item.featured ? 'Yes' : 'No'}, Special Note: ${item.specialNote || 'N/A'}
      `;
      itemList.appendChild(itemElement);
    });
  }
  
  export function updateFeaturedItems(items: Item[]): void {
    const featuredItems = items.filter(item => item.featured);
    const featuredItemsList = document.getElementById('featuredItems')!;
    featuredItemsList.innerHTML = '';
    featuredItems.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'item';
      itemElement.innerHTML = `
        Name: ${item.name}, Category: ${item.category}, Quantity: ${item.quantity},
        Price: ${item.price}, Supplier: ${item.supplier}, Stock Status: ${item.stockStatus},
        Featured: ${item.featured ? 'Yes' : 'No'}, Special Note: ${item.specialNote || 'N/A'}
      `;
      featuredItemsList.appendChild(itemElement);
    });
  }
  
  export function displayMessage(message: string): void {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = message;
    document.body.appendChild(messageElement);
  
    // Remove the message after 3 seconds
    setTimeout(() => {
      document.body.removeChild(messageElement);
    }, 3000);
  }