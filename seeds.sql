INSERT INTO department (name) VALUES ('Engineering'), ('HR'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES 
  ('Engineer', 80000, 1),
  ('HR Manager', 60000, 2),
  ('Accountant', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('Alice', 'Smith', 1, NULL),
  ('Bob', 'Johnson', 2, NULL),
  ('Charlie', 'Lee', 3, 1);
