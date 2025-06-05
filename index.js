import inquirer from 'inquirer';
import {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
} from './db/queries.js';

function mainMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ])
  .then(({ choice }) => {
    switch (choice) {
      case 'View all departments': return viewDepartments();
      case 'View all roles': return viewRoles();
      case 'View all employees': return viewEmployees();
      case 'Add a department': return addDepartment();
      case 'Add a role': return addRole();
      case 'Add an employee': return addEmployee();
      case 'Update an employee role': return updateEmployeeRole();
      case 'Exit': return process.exit();
    }
  })
  .then(() => mainMenu());
}

mainMenu();
