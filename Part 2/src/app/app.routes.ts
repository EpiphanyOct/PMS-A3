import { Routes } from '@angular/router';
import { InventoryRoutingModule } from './inventory/inventory.module';

export const routes: Routes = [
  { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
  { path: 'inventory', loadChildren: () => InventoryRoutingModule },
];