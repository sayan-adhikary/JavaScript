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

-- SELECT
-- Display all students.
select * from students;

-- Display only the name and marks.
select name, marks from students;

-- Display only the department.
select department from students;

-- WHERE
-- Display students with marks greater than 80.
select * from students
where marks < 80;

-- Display students from the CSE department.
select * from students
where department = 'CSE';

-- Display students with marks less than or equal to 72.
select * from students
where marks <= 72;

-- Display students from ECE having marks greater than 75.
select * from students
where department = 'ECE' AND marks > 75;

-- DISTINCT
-- Display all unique departments.
select distinct (department) 
from students;

-- ORDER BY
-- Sort students by marks (Ascending).
select * from students
order by marks;

-- Sort students by marks (Descending).
select * from students
order by marks desc;

-- Sort students alphabetically by name.
select * from students
order by name;

-- LIMIT
-- Display the first 3 students.
select * from students
limit 3;

-- Display the top 2 students with the highest marks.
select * from students
order by marks limit 2;

-- DELETE
-- Delete the student whose id is 6.
delete from students
where id = 6;

-- Display the table after deletion.
select * from students;	

-- ALTER
-- Add a new column named city.
alter table students
add city VARCHAR(50);

-- Update the city for at least 3 students.
update students set city = 'Chennai' WHERE id = 1;
update students set city = 'Coimbatore' WHERE id = 2;
update students set city = 'Madurai' WHERE id = 3;

-- GROUP BY
-- Count the number of students in each department.	
select department, count(*) as student_count
from students
group by department;

-- Find the average marks of each department.
select department, avg(marks) as avarage_marks
from students
group by department;

-- Find the highest marks in each department.
select department, max(marks) as highest_marks
from students
group by department;

-- HAVING
-- Display only departments whose average marks are greater than 80.
select department, avg(marks) as avg_marks
from students
group by department having avg(marks) > 80;

-- Display departments having more than 2 students.
select department, count(*) as student_count
from students
group by department having count(*) > 2;

-- Bonus Challenges
-- Find the second highest marks.
select marks from students
where marks < (select max(marks) from students) order by marks desc limit 1;

SELECT MAX(marks)
FROM students
WHERE marks < (SELECT MAX(marks) FROM students);

-- Display students whose name starts with A.
select * from students
where name LIKE 'A%';

-- Display students whose marks are between 70 and 90.
select * from students
where marks > 70 and marks < 90;

-- Display students whose department is either CSE or ME.
select * from students
where department = 'CSE' or department = 'ME';


























