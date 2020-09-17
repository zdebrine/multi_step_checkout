DROP DATABASE IF EXISTS customerdatabase;

CREATE DATABASE customerdatabase;

USE customerdatabase;

CREATE TABLE IF NOT EXISTS checkoutdata (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(150),
    address_line_1 VARCHAR(250),
    address_line_2 VARCHAR(250),
    city VARCHAR(250),
    state VARCHAR(250),
    zip_code VARCHAR(250),
    card_number VARCHAR(100),
    expiration VARCHAR(100),
    cvv VARCHAR(100),
    billing_zip VARCHAR(100)
)