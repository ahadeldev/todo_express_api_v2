create database todos_db;
use todos_db;

create user "todo_user"@"localhost" identified by "todo_pass";
grant all privileges on todos_db.* to "todo_user"@"localhost";
flush privileges;

select * from todos;