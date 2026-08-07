
-- table creation
create table students (
id	INT,
name VARCHAR(50),
department VARCHAR(30),
marks INT
)

-- Insert Data
insert into students 
(id, name, department, marks)
values
(1,	'Alice', 'CSE',	85),
(2,	'Bob',	'CSE',	72),
(3,	'Charlie','ECE',	90),
(4,	'David','ECE',	65),
(5,	'Emma',	'ME',	88),
(6,	'Frank','CSE',	72),
(7,	'Grace','ME',	95),
(8,	'Harry','ECE',	80);

-- activating the as public
SELECT *
FROM information_schema.tables
WHERE table_schema = 'public';

-- Display all students.
select * from students;

-- Display only the name and marks.
selec
