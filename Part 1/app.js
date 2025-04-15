"use strict";
// 物品数组，用于存储物品  
const inventory = [];
// 处理表单提交  
const form = document.getElementById('itemForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem();
});
// 添加物品的函数  
function addItem() {
    const id = document.getElementById('itemId').value;
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);
    const supplierName = document.getElementById('supplierName').value;
    const stockStatus = document.getElementById('stockStatus').value;
    const featured = document.getElementById('featuredItem').value;
    const specialNote = document.getElementById('specialNote').value;
    // 数据验证：检查ID是否唯一  
    const existingItem = inventory.find(item => item.id === id);
    if (existingItem) {
        alert("物品ID必须唯一！");
        return;
    }
    // 添加新物品  
    const newItem = {
        id, name, category, quantity, price, supplierName, stockStatus, featured, specialNote
    };
    inventory.push(newItem);
    displayItems();
}
// 显示所有物品  
function displayItems() {
    const itemList = document.getElementById('itemList');
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
function deleteItem(id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        if (confirm('您确定要删除此物品吗？')) {
            inventory.splice(index, 1);
            displayItems();
        }
    }
}
