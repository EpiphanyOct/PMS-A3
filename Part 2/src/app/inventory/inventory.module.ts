import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageComponent } from './manage/manage.component';
import { SearchComponent } from './search/search.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'inventory',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'search', component: SearchComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'help', component: HelpComponent },
      { path: '', redirectTo: '/inventory/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}