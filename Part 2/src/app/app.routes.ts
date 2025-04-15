import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'item-manager', loadChildren: () => import('./item-manager/item-manager.module').then(m => m.ItemManagerModule) },
  { path: 'item-search', loadChildren: () => import('./item-search/item-search.module').then(m => m.ItemSearchModule) },
  { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: '**', redirectTo: '/home' }
];