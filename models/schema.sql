DROP DATABASE IF EXISTS recipedb;
CREATE DATABASE recipedb;

USE recipedb

CREATE TABLE recipes(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    foodtype varchar(255) NOT NULL,
    ingredient1 varchar(255) NOT NULL,
    ingredient2 varchar(255) NOT NULL,
    ingredient3 varchar(255) NOT NULL,
    ingredient4 varchar(255) NOT NULL,
    ingredient5 varchar(255) NOT NULL,
    ingredient6 varchar(255) NOT NULL,
    ingredient7 varchar(255) NOT NULL,
    ingredient8 varchar(255) NOT NULL,
    ingredient9 varchar(255) NOT NULL,
    ingredient10 varchar(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
