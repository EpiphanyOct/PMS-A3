import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  supplier: string;
  stockStatus: string;
  featured: boolean;
  specialNote?: string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  items: Item[] = [];
  newItem: Item = {
    id: 0,
    name: '',
    category: '',
    quantity: 0,
    price: 0,
    supplier: '',
    stockStatus: '',
    featured: false
  };

  constructor() {
    // 初始化商品数据，这里可以替换为从服务器获取数据
    this.items = [
      {
        id: 1,
        name: 'Painting',
        category: 'Art',
        quantity: 5,
        price: 100,
        supplier: 'Artist Inc',
        stockStatus: 'In Stock',
        featured: true
      }
    ];
  }

  addItem() {
    // 添加新商品逻辑
    this.newItem.id = this.items.length + 1;
    this.items.push({ ...this.newItem });
    this.newItem = {
      id: 0,
      name: '',
      category: '',
      quantity: 0,
      price: 0,
      supplier: '',
      stockStatus: '',
      featured: false
    };
  }

  editItem(item: Item) {
    // 编辑商品逻辑
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }

  deleteItem(item: Item) {
    // 删除商品逻辑
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}