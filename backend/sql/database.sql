DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;
USE todolist;

/* Create tables */

-- users 
DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id SERIAL PRIMARY KEY, 
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password_hash VARCHAR(150) NOT NULL,
    is_deleted BIT DEFAULT 0
);

/* Insert information */

INSERT INTO users(name, email, password_hash)
VALUES
('Reuben', 'arlo50@example.org', "sajdfgjfdsvi3245idifs"),
('Frederik', 'terrence.cartwright@example.org', "sdfng439gifkmview"),
('Unique', 'rupert55@example.org', "asdmv493jfidsamvg43qf"),
('Norene', 'rebekah29@example.net', "igad932gdfsgii43wg"),
('Frederick', 'von.bridget@example.net', "reisgmvdif390gwidfsb");
