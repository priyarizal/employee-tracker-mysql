const mysql2 = require("mysql2");
const inquirer = require("inquirer");

let cTable = require('console.table');


// Connect to database
const dbConnect = mysql2.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
    // port: 3006,
  },
  console.log(`Connected to the employee_db database`)
);

//connecting to MySQL and database
dbConnect.connect(function (err) {
  if (err) throw err;
  console.log("MySQL connected");
  main();
})
async function main() {
  let quitProgram = false;
  let prompt = await startInquirer();
  switch (prompt.startInquirer) {
    case "View all Departments":
      await viewDepartments();
      break;
    case "View all Roles":
      await viewRoles()
      break;
    case "View all Employees":
      viewEmployees()
      break;
    case "Add a department":
      addDepartment()
      break;
    case "Add a role":
      addRoles()
      break;
    case "Add an Employee":
      addEmployee()
      break;
    case "Update an Employee Role":
      updateEmployeeRole()
      break;
    case "All done":
      console.log('-------------------');
      console.log('All Done');
      console.log('--------------------');
      allDone()
      break;
    default:
      console.log("default")
  }
}
//Setting up prompts for the user

async function startInquirer() {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'startInquirer',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all Roles', 'View all Employees',
          'Add a department', 'Add a role', 'Add an Employee', 'Update an Employee Role', 'AllDone']
      },
    ])
}

//query of department names and department IDs
async function viewDepartments() {
  let query = "SELECT department.id, department.department_name FROM department";
  let rows = await dbConnect.promise().query(query);

  console.table(rows[0]);
  // console.log(rows);
}

//"Presented with the Job title, role Id, the department that role belongs to, and the salary for that role"
async function viewRoles() {
  // let query = "SELECT roles.title, role_id ONdepartment.id, roles.salary FROM roles";
  let query = "SELECT roles.id, roles.title, department.department_name AS department, roles.salary FROM roles JOIN department on roles.department_id = department.id";
  let rows = await dbConnect.promise().query(query);
  console.table(rows[0]);
}

//formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries and managers that the employees reports to"
async function viewEmployees() {
  let query = "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, employee.manager_id AS manager FROM employee JOIN roles on employee.role_id = roles.id JOIN department on roles.department_id = department.id";
  let rows = await dbConnect.promise().query(query);
  console.table(rows[0]);
}


//enter the name of the department which is then added to the database
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What department would you like to add?"
      }
    ]).then(function (answer) {
      dbConnect.query(
        "INSERT INTO department(department_name) VALUES (?)",
        [answer.addDepartment],
        function (err) {
          if (err) throw (err);
          console.log("-------------------------------------------");
          console.log("department added with" + answer.addDepartment);
          console.log("-------------------------------------------");
          startInquirer();
        }
      )
    })
};

//prompted to enter the name, salary, and department for the role and that's also added to the database
function addRoles() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRoles",
        message: "What roles would you like to add?"
      },
      {
        type: "input",
        name: "salary",
        message: "What salary would you like to give this role?",
      },
      {
        type: "list",
        name: "department",
        message: "What department does this role belong to?",
        choices:["1", "2", "3", "4", "5"],
      }
    ]).then(function(answer) {
      dbConnect.query(
        `INSERT INTO roles(title, salary, department_id) VALUES (?, ?, ?)`,
        [answer.addRoles, answer.salary, answer.department],
        function (err) {
          if (err) throw (err);
          console.log("-------------------------------------------");
          console.log("department added with" + answer.addRoles);
          console.log("-------------------------------------------");
          startInquirer();
        }
      )
    })
}

function addEmployee() {
  inquirer
    .prompt ([
      { name: "first_name", message: "What's the employee's first name?" },
      { name: "last_name", message: "What's the employee's last name?" },
      {
        name: "role",
        message: "What is the employee's role?",
        type: "list",
      },
      {
        name: "manager_id",
        message: "Who is the employee's manager?",
        type: "list",
      },
    ])

}
// enter employee's first name, last name, role, manager, and that employee is added to the database


function updateEmployeeRole() {


}
// select an employee to update and their new role and added this to the database


function allDone() {

}
