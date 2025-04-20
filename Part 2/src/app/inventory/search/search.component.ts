import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  items: Item[] = [];
  searchTerm: string = '';

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

  searchItems() {
    if (this.searchTerm.trim() === '') {
      return this.items;
    }
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}