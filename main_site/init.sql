CREATE DATABASE db;

CREATE TABLE Products (
    product_id INTEGER,
    name VARCHAR(100),
    description VARCHAR(255),
    price ,
)

CREATE TABLE Reviews (
    title VARCHAR(100),
    body VARCHAR(255),
    rating INTEGER,
    timestamp ...,
    user_id INTEGER
);

CREATE TABLE Users (
    user_id INTEGER,
    username VARCHAR(32),
    email VARCHAR(255),
    password_hash VARCHAR(),
    password_salt VARCHAR()
)
