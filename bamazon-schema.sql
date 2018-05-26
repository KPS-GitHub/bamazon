DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    department_name VARCHAR(150),
    price DECIMAL(9,2),
    stock_quantity INT,

    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES ("Big Ol' TV", "electronics", 250, 10),
           ("Gaming Laptop", "electronics", 950, 5),
           ("Old Rug", "furniture", 10, 1),
           ("Baseball Glove", "sporting equipment", 20, 20),
           ("Workout Bench", "sporting equipment", 100, 15),
           ("Single Purpose Kitchen Crap", "cooking", 5, 1000),
           ("Full-Stack Web Dev Certificate", "education", 12000, 25),
           ("Calvin & Hobbes Collection", "books", 100, 3),
           ("Skateboard", "sporting equipment", 75, 25),
           ("Coffee Maker", "cooking", 50, 100);
