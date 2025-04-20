import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help',
  imports: [CommonModule],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  faqs = [
    {
      question: 'How do I add a new item?',
      answer: 'Click the "Add Item" button on the Manage page and fill in the item details.'
    },
    {
      question: 'How do I edit an existing item?',
      answer: 'Navigate to the Manage page, find the item you want to edit, and click the "Edit" button.'
    },
    {
      question: 'How do I delete an item?',
      answer: 'Navigate to the Manage page, find the item you want to delete, and click the "Delete" button.'
    },
    {
      question: 'How do I search for items?',
      answer: 'Go to the Search page, enter the item name in the search box, and click the "Search" button.'
    }
  ];
}