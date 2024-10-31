import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './home/Customer-home.component';
import { CustomerNewComponent } from './new/Customer-new.component';
import { CustomerDetailComponent } from './detail/Customer-detail.component';

const routes: Routes = [
  {path: '', component: CustomerHomeComponent},
  { path: 'new', component: CustomerNewComponent },
  { path: ':id', component: CustomerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Customer-detail-permissions'
      }
    }
  },{
    path: ':customer_id/CustomerOrder', loadChildren: () => import('../CustomerOrder/CustomerOrder.module').then(m => m.CustomerOrderModule),
    data: {
        oPermission: {
            permissionId: 'CustomerOrder-detail-permissions'
        }
    }
},{
    path: ':customer_id/Delivery', loadChildren: () => import('../Delivery/Delivery.module').then(m => m.DeliveryModule),
    data: {
        oPermission: {
            permissionId: 'Delivery-detail-permissions'
        }
    }
}
];

export const CUSTOMER_MODULE_DECLARATIONS = [
    CustomerHomeComponent,
    CustomerNewComponent,
    CustomerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }