import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'CustomerOrder', loadChildren: () => import('./CustomerOrder/CustomerOrder.module').then(m => m.CustomerOrderModule) },
    
        { path: 'Delivery', loadChildren: () => import('./Delivery/Delivery.module').then(m => m.DeliveryModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'OrderDetail', loadChildren: () => import('./OrderDetail/OrderDetail.module').then(m => m.OrderDetailModule) },
    
        { path: 'OrderItem', loadChildren: () => import('./OrderItem/OrderItem.module').then(m => m.OrderItemModule) },
    
        { path: 'Product', loadChildren: () => import('./Product/Product.module').then(m => m.ProductModule) },
    
        { path: 'PurchaseOrder', loadChildren: () => import('./PurchaseOrder/PurchaseOrder.module').then(m => m.PurchaseOrderModule) },
    
        { path: 'RetailLocation', loadChildren: () => import('./RetailLocation/RetailLocation.module').then(m => m.RetailLocationModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'TimeLog', loadChildren: () => import('./TimeLog/TimeLog.module').then(m => m.TimeLogModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }