INSERT INTO department(name)
VALUES  ("Operations"),
        ("IT"),
        ("Production"),
        ("Legal"),
        ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES  ("CEO",1000000, 1),
        ("Operations manager", 80,000, 1),
        ("Software Engineer", 185,000, 2),
        ("Product Manager", 120,000, 3),
        ("Attorney", 250,000, 4),
        ("CFO", 300,000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES    ("C","EO", 1, NULL),
          ("O", "M", 2, 1),
          ("S", "E", 3, 1),
          ("P", "M", 4, 1),
          ("A","G", 5, 1),
          ("C", "FO", 6, 1);
          

