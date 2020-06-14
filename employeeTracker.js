var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "jy2052927",
  database: "employees_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  askUserChoice();
  });

function askUserChoice() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add a department",
        "Add an employee role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add a department":
        addDepartment();
        break;

      case "Add an employee role":
        addRole();
        break;

      case "Add employee":
        addEmployee();
        break;

      case "View departments":
        viewDepartments();
        break;
      
      case "View roles":
        viewRoles();
        break;

      case "View employees":
        viewEmployees();
        break;

      case "Update employee role":
        updateEmployee();
        break;

      case "exit":
        connection.end();
        break;
      }
    });
}



