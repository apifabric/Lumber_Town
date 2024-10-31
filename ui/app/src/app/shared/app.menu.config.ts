import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { CustomerOrderCardComponent } from './CustomerOrder-card/CustomerOrder-card.component';

import { DeliveryCardComponent } from './Delivery-card/Delivery-card.component';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { OrderDetailCardComponent } from './OrderDetail-card/OrderDetail-card.component';

import { OrderItemCardComponent } from './OrderItem-card/OrderItem-card.component';

import { ProductCardComponent } from './Product-card/Product-card.component';

import { PurchaseOrderCardComponent } from './PurchaseOrder-card/PurchaseOrder-card.component';

import { RetailLocationCardComponent } from './RetailLocation-card/RetailLocation-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { TimeLogCardComponent } from './TimeLog-card/TimeLog-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'CustomerOrder', name: 'CUSTOMERORDER', icon: 'view_list', route: '/main/CustomerOrder' }
    
        ,{ id: 'Delivery', name: 'DELIVERY', icon: 'view_list', route: '/main/Delivery' }
    
        ,{ id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'OrderDetail', name: 'ORDERDETAIL', icon: 'view_list', route: '/main/OrderDetail' }
    
        ,{ id: 'OrderItem', name: 'ORDERITEM', icon: 'view_list', route: '/main/OrderItem' }
    
        ,{ id: 'Product', name: 'PRODUCT', icon: 'view_list', route: '/main/Product' }
    
        ,{ id: 'PurchaseOrder', name: 'PURCHASEORDER', icon: 'view_list', route: '/main/PurchaseOrder' }
    
        ,{ id: 'RetailLocation', name: 'RETAILLOCATION', icon: 'view_list', route: '/main/RetailLocation' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'TimeLog', name: 'TIMELOG', icon: 'view_list', route: '/main/TimeLog' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,CustomerOrderCardComponent

    ,DeliveryCardComponent

    ,EmployeeCardComponent

    ,InventoryCardComponent

    ,OrderDetailCardComponent

    ,OrderItemCardComponent

    ,ProductCardComponent

    ,PurchaseOrderCardComponent

    ,RetailLocationCardComponent

    ,SupplierCardComponent

    ,TimeLogCardComponent

];