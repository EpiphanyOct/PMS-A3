import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {
  privacyPolicy = `
    <h2>Privacy Policy</h2>
    <p>This application collects and stores inventory data for an art gallery.</p>
    <h3>Data Collection</h3>
    <p>The application collects the following information:</p>
    <ul>
      <li>Item ID</li>
      <li>Item Name</li>
      <li>Category</li>
      <li>Quantity</li>
      <li>Price</li>
      <li>Supplier Name</li>
      <li>Stock Status</li>
      <li>Featured Item Status</li>
      <li>Special Note</li>
    </ul>
    <h3>Data Storage</h3>
    <p>All data is stored securely within the application and is not shared with third parties.</p>
    <h3>Data Security</h3>
    <p>The application ensures data security through:</p>
    <ul>
      <li>Input validation</li>
      <li>Secure data storage</li>
      <li>Regular security updates</li>
    </ul>
  `;
}