# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

# Base class for SQLAlchemy models
Base = declarative_base()

class Customer(Base):
    """
    description: Stores customer information including contact details.
    """
    __tablename__ = 'customer'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    email = Column(String)
    phone = Column(String)
    address = Column(String)

class Employee(Base):
    """
    description: Stores employee records and their positions.
    """
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    position = Column(String)
    start_date = Column(DateTime)

class Product(Base):
    """
    description: Maintains inventory of available lumber products.
    """
    __tablename__ = 'product'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    description = Column(String)
    price = Column(Float)

class Delivery(Base):
    """
    description: Schedules and tracks deliveries to customers.
    """
    __tablename__ = 'delivery'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'))
    delivery_date = Column(DateTime)
    status = Column(String)

class RetailLocation(Base):
    """
    description: Lists all retail locations for the lumber yard.
    """
    __tablename__ = 'retail_location'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    address = Column(String)

class Inventory(Base):
    """
    description: Tracks inventory levels at each retail location.
    """
    __tablename__ = 'inventory'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('product.id'))
    location_id = Column(Integer, ForeignKey('retail_location.id'))
    quantity = Column(Integer)

class Supplier(Base):
    """
    description: Contains supplier data for the lumber products.
    """
    __tablename__ = 'supplier'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    contact_info = Column(String)

class PurchaseOrder(Base):
    """
    description: Records purchase orders placed to suppliers.
    """
    __tablename__ = 'purchase_order'
    id = Column(Integer, primary_key=True, autoincrement=True)
    supplier_id = Column(Integer, ForeignKey('supplier.id'))
    order_date = Column(DateTime)
    total_amount = Column(Float)

class OrderDetail(Base):
    """
    description: Details individual products within each purchase order.
    """
    __tablename__ = 'order_detail'
    id = Column(Integer, primary_key=True, autoincrement=True)
    purchase_order_id = Column(Integer, ForeignKey('purchase_order.id'))
    product_id = Column(Integer, ForeignKey('product.id'))
    quantity = Column(Integer)
    price_each = Column(Float)

class CustomerOrder(Base):
    """
    description: Records customer orders including products and quantities.
    """
    __tablename__ = 'customer_order'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customer.id'))
    order_date = Column(DateTime)
    total_amount = Column(Float)

class OrderItem(Base):
    """
    description: Contains items within a customer order.
    """
    __tablename__ = 'order_item'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_order_id = Column(Integer, ForeignKey('customer_order.id'))
    product_id = Column(Integer, ForeignKey('product.id'))
    quantity = Column(Integer)
    price_each = Column(Float)

class TimeLog(Base):
    """
    description: Logs employee work hours.
    """
    __tablename__ = 'time_log'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'))
    log_date = Column(DateTime)
    hours_worked = Column(Float)

# Creating the SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Creating a session to add sample data
Session = sessionmaker(bind=engine)
session = Session()

# Adding sample data
customers = [
    Customer(name="John Doe", email="john.doe@example.com", phone="123-456-7890", address="123 Elm St"),
    Customer(name="Jane Smith", email="jane.smith@example.com", phone="098-765-4321", address="456 Oak St")
]

employees = [
    Employee(name="Alice Johnson", position="Manager", start_date=datetime.datetime(2020, 1, 15)),
    Employee(name="Bob Williams", position="Sales", start_date=datetime.datetime(2021, 6, 22))
]

products = [
    Product(name="2x4 Lumber", description="Standard 2x4 lumber", price=2.99),
    Product(name="4x4 Lumber", description="Standard 4x4 lumber", price=5.99)
]

retail_locations = [
    RetailLocation(name="Main Street Lumber Yard", address="111 Main St"),
    RetailLocation(name="Downtown Lumber Yard", address="222 Downtown Ave")
]

deliveries = [
    Delivery(customer_id=1, delivery_date=datetime.datetime(2023, 11, 14), status="Scheduled"),
    Delivery(customer_id=2, delivery_date=datetime.datetime(2023, 11, 15), status="Delivered")
]

inventories = [
    Inventory(product_id=1, location_id=1, quantity=150),
    Inventory(product_id=2, location_id=2, quantity=100)
]

suppliers = [
    Supplier(name="Lumber Supply Inc.", contact_info="contact@lumbersupply.com"),
    Supplier(name="Wooden Goods Co.", contact_info="info@woodengoods.com")
]

purchase_orders = [
    PurchaseOrder(supplier_id=1, order_date=datetime.datetime(2023, 9, 20), total_amount=500.00),
    PurchaseOrder(supplier_id=2, order_date=datetime.datetime(2023, 10, 5), total_amount=850.00)
]

order_details = [
    OrderDetail(purchase_order_id=1, product_id=1, quantity=100, price_each=2.50),
    OrderDetail(purchase_order_id=2, product_id=2, quantity=75, price_each=5.00)
]

customer_orders = [
    CustomerOrder(customer_id=1, order_date=datetime.datetime(2023, 11, 10), total_amount=59.80),
    CustomerOrder(customer_id=2, order_date=datetime.datetime(2023, 11, 12), total_amount=239.60)
]

order_items = [
    OrderItem(customer_order_id=1, product_id=1, quantity=20, price_each=2.99),
    OrderItem(customer_order_id=2, product_id=2, quantity=40, price_each=5.99)
]

time_logs = [
    TimeLog(employee_id=1, log_date=datetime.datetime(2023, 10, 20), hours_worked=8),
    TimeLog(employee_id=2, log_date=datetime.datetime(2023, 10, 21), hours_worked=6.5)
]

# Adding all sample data to the session
session.add_all(customers + employees + products + retail_locations + deliveries + inventories + suppliers + purchase_orders + order_details + customer_orders + order_items + time_logs)

# Committing the session to save data to the database
session.commit()

# Closing the session
session.close()
