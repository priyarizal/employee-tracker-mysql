const mysql2 = require ("mysql2");
const inquirer = require ("inquirer");
const express = require ("express");

const app = express();

const PORT = process.env.PORT || 3000


// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to database
const dbConnect = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "department_db",
      port: 3006,
    },
    console.log(`Connected to the department_db database`)
  );

//connecting to MySQL and database
dbConnect.connect(function(err){
  if(err) throw err;
   console.log("MySQL connected");
})


function startInquirer () {
    inquirer
        .prompt ([

          {
            type: 'list',
            name: 'startInquirer',
            message: 'What would you like to do?',
            choices: ['View all Departments', 'View all Roles' , 'View all Employees', 
            'Add a department' , 'Add a role', 'Add an Employee', 'Update an Employee Role', 'AllDone' ]
          }, 
        ])
            .then ((usersChoice) => {
               switch(usersChoice.startInquirer) {
                case "View all Departments":
                    viewDepartments()
                    break;
                case "View all Roles":
                    viewRoles()
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
                    console.log ('-------------------');
                    console.log('All Done');
                    console.log ('--------------------');
                    break;
                default: 
                console.log ("default")
               }

            })
}


//"presented with a formatted table showing department names and department IDs"

//query of department names and department IDs

function viewDepartments ()




function viewRoles ()
//"Presented with the Job title, role Id, the department that role belongs to, and the salary for that role"



function viewEmployees()
//"Presented with a formatted table showing employee data, including employee ids, 
//first names, last names, job titles, departments, salaries and managers that the employees reports to"



function addDepartment ()
//enter the name of the department which is then added to the database


function addRoles ()
//prompted to enter the name, salary, and department for the role and that's also added to the database


function addEmployee()
// enter employee's first name, last name, role, manager, and that employee is added to the database


function updateEmployeeRole()
// select an employee to update and their new role and added this to the database