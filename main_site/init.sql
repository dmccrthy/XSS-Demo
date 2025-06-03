CREATE DATABASE 'name';

CREATE TABLE products (
    id INTEGER,
    name VARCHAR(),
    description VARCHAR(),
    price 
    image VARCHAR()
)

CREATE TABLE reviews (
    title VARCHAR(100),
    body VARCHAR(255),
    score INTEGER,
    author INTEGER
);

CREATE TABLE users {
    id INTEGER,
    username VARCHAR(32),
    password_hash VARCHAR(),
    password_salt VARCHAR()
}
