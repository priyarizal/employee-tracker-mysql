DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE deprtment_db;

-- Table for department
DROP TABLE IF EXISTS department_db;
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- Table for roles
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL
);

-- Table for employee
DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id) REFERENCES roles(id)
    ON DELETE SET NULL
);

