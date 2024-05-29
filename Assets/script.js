// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Initiate employees array
const employees = [];

// Collect employee data
const collectEmployees = function() {
  // Set prompt for entering an employee's first name as a contstant variable
  const firstName = prompt("Enter employee's first name:");
  // set prompt for entering an employee's last name as a contstant variable
  const lastName = prompt("Enter employee's last name:");
  // set prompt for entering an employee's salary as a contstant variable
  const salary = prompt("Enter employee's salary:");

  // method for the newEmployee Object
  const newEmployee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };

  // Adds each new array object into the employees array
  employees.push(newEmployee);
  if (confirm("Do you want to add more employees?")) {
    collectEmployees();
  }

  // returns the employees array
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // initiate totalSalary variable to 0
  let totalSalary = 0;

  // for loop that iterates through the length of the employee array
  // while adding up the total salary
  for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + parseInt(employees[i].salary);
  }

  // creates a constant variable called averageSalary that takes
  // the totalSalary (see above) and divides it by the total number
  // of employees to get the average salary for all employees
  const averageSalary = totalSalary / employees.length;

  // prints to the console the average salary for the number of employees in the array
  console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees.`)
}

// Select a random employee from the employees array
const getRandomEmployee = function(employeesArray) {
  // uses the math libaray to pull a random index from the employees array
  const randomEmployee = employees[Math.floor(Math.random() * employees.length)];

  // prints to the console long a random employee's first and last name
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
