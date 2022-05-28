DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;
USE todolist;

/* Create tables */

-- users 
DROP TABLE IF EXISTS users;
CREATE TABLE users (
	id SERIAL PRIMARY KEY, 
    `name` VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(150) NOT NULL,
    is_deleted BIT DEFAULT 0
);

-- profiles
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
	user_id SERIAL PRIMARY KEY,
    created_at DATETIME NOT NULL,
    photo_id VARCHAR(100),
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- projects
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	id SERIAL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500)
);

-- list of todo cards
DROP TABLE IF EXISTS todo_cards;
CREATE TABLE todo_cards (
	id SERIAL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500),
    project_id BIGINT UNSIGNED NOT NULL,
    
    FOREIGN KEY (project_id) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- projects - users
DROP TABLE IF EXISTS projects_users;
CREATE TABLE projects_users (
	project_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    
    FOREIGN KEY (project_id) REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Insert information */

INSERT INTO users(name, email, password_hash)
VALUES
('Reuben', 'arlo50@example.org', "sajdfgjfdsvi3245idifs"),
('Frederik', 'terrence.cartwright@example.org', "sdfng439gifkmview"),
('Unique', 'rupert55@example.org', "asdmv493jfidsamvg43qf"),
('Norene', 'rebekah29@example.net', "igad932gdfsgii43wg"),
('Frederick', 'von.bridget@example.net', "reisgmvdif390gwidfsb");

INSERT INTO projects(name, description)
VALUES
("First Project", "It's my first project"),
("First Project", "It's my first project"),
("First Project", "It's my first project"),
("First Project", "It's my first project");

DELETE FROM projects
WHERE id = 2;
