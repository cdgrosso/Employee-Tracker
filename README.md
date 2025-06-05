# Employee Tracker

## Description

A command-line application built with Node.js, Inquirer, and PostgreSQL that allows business owners to view and manage departments, roles, and employees in their company database.

## Features

- View all departments, roles, and employees
- Add a department, role, or employee
- Update an employee's role
- Fully interactive CLI menu using Inquirer
- PostgreSQL database with relational schema

## Technologies Used

- Node.js
- Inquirer
- PostgreSQL (`pg`)
- dotenv

## Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd employee-tracker
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your PostgreSQL database:
   - Create a database (e.g., `employeedb`)
   - Run the SQL scripts:
     ```
     psql -U <username> -d employeedb -f schema.sql
     psql -U <username> -d employeedb -f seeds.sql
     ```

4. Add a `.env` file in the root directory with your connection string:
   ```
   DATABASE_URL=postgresql://<username>:<password>@localhost:5432/employeedb
   ```

## Usage

Run the application using Node.js:
```
node index.js
```

You will be presented with an interactive menu to manage the company database.

## Walkthrough Video

[Include your video walkthrough link here]

## License

MIT
