import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrderHomeComponent } from './home/CustomerOrder-home.component';
import { CustomerOrderNewComponent } from './new/CustomerOrder-new.component';
import { CustomerOrderDetailComponent } from './detail/CustomerOrder-detail.component';

const routes: Routes = [
  {path: '', component: CustomerOrderHomeComponent},
  { path: 'new', component: CustomerOrderNewComponent },
  { path: ':id', component: CustomerOrderDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CustomerOrder-detail-permissions'
      }
    }
  },{
    path: ':customer_order_id/OrderItem', loadChildren: () => import('../OrderItem/OrderItem.module').then(m => m.OrderItemModule),
    data: {
        oPermission: {
            permissionId: 'OrderItem-detail-permissions'
        }
    }
}
];

export const CUSTOMERORDER_MODULE_DECLARATIONS = [
    CustomerOrderHomeComponent,
    CustomerOrderNewComponent,
    CustomerOrderDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrderRoutingModule { }