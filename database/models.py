# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 31, 2024 16:42:25
# Database: sqlite:////tmp/tmp.h6wnASOzfF/Lumber_Town/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Stores customer information including contact details.
    """
    __tablename__ = 'customer'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CustomerOrderList : Mapped[List["CustomerOrder"]] = relationship(back_populates="customer")
    DeliveryList : Mapped[List["Delivery"]] = relationship(back_populates="customer")



class Employee(SAFRSBaseX, Base):
    """
    description: Stores employee records and their positions.
    """
    __tablename__ = 'employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    position = Column(String)
    start_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    TimeLogList : Mapped[List["TimeLog"]] = relationship(back_populates="employee")



class Product(SAFRSBaseX, Base):
    """
    description: Maintains inventory of available lumber products.
    """
    __tablename__ = 'product'
    _s_collection_name = 'Product'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    price = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="product")
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="product")
    OrderItemList : Mapped[List["OrderItem"]] = relationship(back_populates="product")



class RetailLocation(SAFRSBaseX, Base):
    """
    description: Lists all retail locations for the lumber yard.
    """
    __tablename__ = 'retail_location'
    _s_collection_name = 'RetailLocation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="location")



class Supplier(SAFRSBaseX, Base):
    """
    description: Contains supplier data for the lumber products.
    """
    __tablename__ = 'supplier'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    contact_info = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    PurchaseOrderList : Mapped[List["PurchaseOrder"]] = relationship(back_populates="supplier")



class CustomerOrder(SAFRSBaseX, Base):
    """
    description: Records customer orders including products and quantities.
    """
    __tablename__ = 'customer_order'
    _s_collection_name = 'CustomerOrder'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'))
    order_date = Column(DateTime)
    total_amount = Column(Float)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("CustomerOrderList"))

    # child relationships (access children)
    OrderItemList : Mapped[List["OrderItem"]] = relationship(back_populates="customer_order")



class Delivery(SAFRSBaseX, Base):
    """
    description: Schedules and tracks deliveries to customers.
    """
    __tablename__ = 'delivery'
    _s_collection_name = 'Delivery'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customer.id'))
    delivery_date = Column(DateTime)
    status = Column(String)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("DeliveryList"))

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Tracks inventory levels at each retail location.
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    product_id = Column(ForeignKey('product.id'))
    location_id = Column(ForeignKey('retail_location.id'))
    quantity = Column(Integer)

    # parent relationships (access parent)
    location : Mapped["RetailLocation"] = relationship(back_populates=("InventoryList"))
    product : Mapped["Product"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class PurchaseOrder(SAFRSBaseX, Base):
    """
    description: Records purchase orders placed to suppliers.
    """
    __tablename__ = 'purchase_order'
    _s_collection_name = 'PurchaseOrder'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    supplier_id = Column(ForeignKey('supplier.id'))
    order_date = Column(DateTime)
    total_amount = Column(Float)

    # parent relationships (access parent)
    supplier : Mapped["Supplier"] = relationship(back_populates=("PurchaseOrderList"))

    # child relationships (access children)
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="purchase_order")



class TimeLog(SAFRSBaseX, Base):
    """
    description: Logs employee work hours.
    """
    __tablename__ = 'time_log'
    _s_collection_name = 'TimeLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'))
    log_date = Column(DateTime)
    hours_worked = Column(Float)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("TimeLogList"))

    # child relationships (access children)



class OrderDetail(SAFRSBaseX, Base):
    """
    description: Details individual products within each purchase order.
    """
    __tablename__ = 'order_detail'
    _s_collection_name = 'OrderDetail'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    purchase_order_id = Column(ForeignKey('purchase_order.id'))
    product_id = Column(ForeignKey('product.id'))
    quantity = Column(Integer)
    price_each = Column(Float)

    # parent relationships (access parent)
    product : Mapped["Product"] = relationship(back_populates=("OrderDetailList"))
    purchase_order : Mapped["PurchaseOrder"] = relationship(back_populates=("OrderDetailList"))

    # child relationships (access children)



class OrderItem(SAFRSBaseX, Base):
    """
    description: Contains items within a customer order.
    """
    __tablename__ = 'order_item'
    _s_collection_name = 'OrderItem'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_order_id = Column(ForeignKey('customer_order.id'))
    product_id = Column(ForeignKey('product.id'))
    quantity = Column(Integer)
    price_each = Column(Float)

    # parent relationships (access parent)
    customer_order : Mapped["CustomerOrder"] = relationship(back_populates=("OrderItemList"))
    product : Mapped["Product"] = relationship(back_populates=("OrderItemList"))

    # child relationships (access children)
