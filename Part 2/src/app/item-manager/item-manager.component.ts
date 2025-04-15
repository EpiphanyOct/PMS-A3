import { Component } from '@angular/core';  

interface Item {  
    id: string;  
    name: string;  
    category: string;  
    quantity: number;  
    price: number;  
    supplierName: string;  
    stockStatus: string;  
    featured: string;  
    specialNote?: string;  
}  

@Component({  
    selector: 'app-item-manager',  
    templateUrl: './item-manager.component.html',  
    styleUrls: ['./item-manager.component.css']  
})  
export class ItemManagerComponent {  
    inventory: Item[] = [];  
    newItem: Item = {  
        id: '',  
        name: '',  
        category: '',  
        quantity: 0,  
        price: 0,  
        supplierName: '',  
        stockStatus: 'In Stock',  
        featured: 'No',  
    };  

    addItem(): void {  
        const existingItem = this.inventory.find(item => item.id === this.newItem.id);  
        if (existingItem) {  
            alert('物品ID必须唯一！');  
            return;  
        }  
        this.inventory.push({ ...this.newItem });  
        this.resetForm();  
    }  

    resetForm(): void {  
        this.newItem = {  
            id: '',  
            name: '',  
            category: '',  
            quantity: 0,  
            price: 0,  
            supplierName: '',  
            stockStatus: 'In Stock',  
            featured: 'No',  
        };  
    }  

    deleteItem(id: string): void {  
        const index = this.inventory.findIndex(item => item.id === id);  
        if (index !== -1 && confirm('您确定要删除此物品吗？')) {  
            this.inventory.splice(index, 1);  
        }  
    }  
}  