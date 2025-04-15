// 定义物品接口  
interface Item {  
    id: string; // 物品ID  
    name: string; // 物品名称  
    category: string; // 类别  
    quantity: number; // 数量  
    price: number; // 价格  
    supplierName: string; // 供应商名称  
    stockStatus: string; // 库存状态  
    featured: string; // 是否为特色物品  
    specialNote?: string; // 特别备注（可选）  
}  

// 物品数组，用于存储物品  
const inventory: Item[] = [];  

// 处理表单提交  
const form = document.getElementById('itemForm') as HTMLFormElement;  
form.addEventListener('submit', (event) => {  
    event.preventDefault();  
    addItem();  
});  

// 添加物品的函数  
function addItem(): void {  
    const id = (document.getElementById('itemId') as HTMLInputElement).value;  
    const name = (document.getElementById('itemName') as HTMLInputElement).value;  
    const category = (document.getElementById('category') as HTMLSelectElement).value;  
    const quantity = parseInt((document.getElementById('quantity') as HTMLInputElement).value);  
    const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);  
    const supplierName = (document.getElementById('supplierName') as HTMLInputElement).value;  
    const stockStatus = (document.getElementById('stockStatus') as HTMLSelectElement).value;  
    const featured = (document.getElementById('featuredItem') as HTMLSelectElement).value;  
    const specialNote = (document.getElementById('specialNote') as HTMLTextAreaElement).value;  

    // 数据验证：检查ID是否唯一  
    const existingItem = inventory.find(item => item.id === id);  
    if (existingItem) {  
        alert("物品ID必须唯一！");  
        return;  
    }  

    // 添加新物品  
    const newItem: Item = {  
        id, name, category, quantity, price, supplierName, stockStatus, featured, specialNote  
    };  
    inventory.push(newItem);  
    displayItems();  
}  

// 显示所有物品  
function displayItems(): void {  
    const itemList = document.getElementById('itemList')!;  
    itemList.innerHTML = ''; // 清空当前列表  

    inventory.forEach(item => {  
        const itemDiv = document.createElement('div');  
        itemDiv.innerHTML = `  
            <div>  
                <strong>名称：</strong>${item.name}<br>  
                <strong>类别：</strong>${item.category}<br>  
                <strong>数量：</strong>${item.quantity}<br>  
                <strong>价格：</strong>${item.price}<br>  
                <strong>供应商：</strong>${item.supplierName}<br>  
                <strong>库存状态：</strong>${item.stockStatus}<br>  
                <strong>特色：</strong>${item.featured}<br>  
                <strong>备注：</strong>${item.specialNote || '无'}<br>  
                <button onclick="deleteItem('${item.id}')">删除</button>  
                <hr>  
            </div>  
        `;  
        itemList.appendChild(itemDiv);  
    });  
}  

// 删除物品的函数  
function deleteItem(id: string): void {  
    const index = inventory.findIndex(item => item.id === id);  
    if (index !== -1) {  
        if (confirm('您确定要删除此物品吗？')) {  
            inventory.splice(index, 1);  
            displayItems();  
        }  
    }  
}     
