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
    created_at VARCHAR(50) NOT NULL,
    image VARCHAR(13000),
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- projects
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	id SERIAL PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(500),
    last_update BIGINT NOT NULL
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

INSERT INTO projects(name, description, last_update)
VALUES
("First Project", "It's my first project", 1654170652465),
("Second Project", "It's my first project", 1654170652465),
("Third Project", "It's my first project", 1654170652465),
("Fourth Project", "It's my first project", 1654170652465),
("Fifth Project", "It's my first project", 1654170652465);

INSERT INTO projects_users(project_id, user_id)
VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3),
(4, 4),
(4, 5),
(5, 5);

INSERT INTO profiles(user_id, created_at)
VALUES
(1, "1655100111802"),
(2, "1655100111802"),
(3, "1655100111802"),
(4, "1655100111802"),
(5, "1655100111802");