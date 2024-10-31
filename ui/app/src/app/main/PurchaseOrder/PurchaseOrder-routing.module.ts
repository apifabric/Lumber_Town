import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseOrderHomeComponent } from './home/PurchaseOrder-home.component';
import { PurchaseOrderNewComponent } from './new/PurchaseOrder-new.component';
import { PurchaseOrderDetailComponent } from './detail/PurchaseOrder-detail.component';

const routes: Routes = [
  {path: '', component: PurchaseOrderHomeComponent},
  { path: 'new', component: PurchaseOrderNewComponent },
  { path: ':id', component: PurchaseOrderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PurchaseOrder-detail-permissions'
      }
    }
  },{
    path: ':purchase_order_id/OrderDetail', loadChildren: () => import('../OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule),
    data: {
        oPermission: {
            permissionId: 'OrderDetail-detail-permissions'
        }
    }
}
];

export const PURCHASEORDER_MODULE_DECLARATIONS = [
    PurchaseOrderHomeComponent,
    PurchaseOrderNewComponent,
    PurchaseOrderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }