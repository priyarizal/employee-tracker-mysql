const mysql2 = require ("mysql2");
const inquirer = require ("inquirer");
const express = require ("express");

const app = express();

const PORT = process.env.PORT || 3000


// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "department_db",
    },
    console.log(`Connected to the department_db database`)
  );