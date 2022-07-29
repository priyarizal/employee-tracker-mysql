INSERT INTO department(department_name)
VALUES  ("Operations"),
        ("IT"),
        ("Production"),
        ("Legal"),
        ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES  ("CEO",1000000, 1),
        ("Operations manager", 80000, 1),
        ("Software Engineer", 185000, 2),
        ("Product Manager", 120000, 3),
        ("Attorney", 250000, 4),
        ("CFO", 300000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES    ("Cardmom","Seeds", 1, NULL),
          ("Oregano", "Mike", 2, 1),
          ("Sage", "Ernest", 3, 1),
          ("Pepper", "Milk", 4, 1),
          ("Asa","Girl", 5, 1),
          ("Cumin", "Fog", 6, 1);
          

