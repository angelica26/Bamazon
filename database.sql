DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id integer(10) AUTO_INCREMENT NOT NULL,
product_name varchar(80) NOT NULL,
department_name varchar(80) NOT NULL,
price decimal(10, 2) NOT NULL,
stock_quantity integer(10) NOT NULL,

PRIMARY KEY(item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("big fluffy blanket", "home goods", 25.00, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bon Appetit Desserts: The Cookbook for All Things Sweet and Wonderful", "books", 22.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Nike Air Force 1s", "shoes", 65.00, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iRobot Roomba", "home goods", 300.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-Men and the Wolverine Collection", "movies and tv", 44.50, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pepperidge Farm Milano Cookies 24 pack", "grocery", 60.00, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mango body butter", "bath and beauty", 9.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Naturemade Vitamin C gummies", "health", 10.75, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("New Wayfarer Ray Ban sunglasses", "accessories", 90.00, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Himalayan salt lamp", "home goods", 19.95, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twinings Peppermint Tea", "grocery", 2.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("leather journal", "office", 9.99, 20);