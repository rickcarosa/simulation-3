create table users(
    id serial primary key, 
    username varchar(20),
    password varchar(20),
    profile_pic TEXT 
);

create table posts(
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users (id)
);

select * from users;
select * from posts;

insert into users(username, password)

values($1, $2);

select * from users u
left outer join posts p on u.id = p.author_id;