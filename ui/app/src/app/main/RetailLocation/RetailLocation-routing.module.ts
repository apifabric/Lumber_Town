import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailLocationHomeComponent } from './home/RetailLocation-home.component';
import { RetailLocationNewComponent } from './new/RetailLocation-new.component';
import { RetailLocationDetailComponent } from './detail/RetailLocation-detail.component';

const routes: Routes = [
  {path: '', component: RetailLocationHomeComponent},
  { path: 'new', component: RetailLocationNewComponent },
  { path: ':id', component: RetailLocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RetailLocation-detail-permissions'
      }
    }
  },{
    path: ':location_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
}
];

export const RETAILLOCATION_MODULE_DECLARATIONS = [
    RetailLocationHomeComponent,
    RetailLocationNewComponent,
    RetailLocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailLocationRoutingModule { }