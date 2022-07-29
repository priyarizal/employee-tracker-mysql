# Employee-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


This application is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. 

The command line accepts user input and is presented with following options when user's start the application: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role. All the view options provide the users with respective data. The add options allow users to add either a department or a role and salary associated with that role.


It would ideally also allow users to update an employee role and add an employee but this felt incredibly difficult for me at this moment. I sincerely hope to do better next time. Or even hope to come back to this project in the very near future to see if stepping away from it was all that I needed to figure it out. 

## Deployed link and URL 
- GitHub URL : https://github.com/priyarizal/employee-tracker-mysql


## Code Snippets
 - MySQL

 ```
 async function viewEmployees() {
  let query = "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, employee.manager_id AS manager FROM employee JOIN roles on employee.role_id = roles.id JOIN department on roles.department_id = department.id";
  let rows = await dbConnect.promise().query(query);
  console.table(rows[0]);
}
 ```
## Technologies Used
- JavaScript
- Node.js
- NPM
- Mysql2
- Inquirer Package
- Console.table 


## Gif walkthrough
![gif of demo]()

## License
MIT


## Questions
If you have any questions about the project, please feel free to reach me at priya.rizal2@gmail.com