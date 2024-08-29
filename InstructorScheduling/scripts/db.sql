create table instructor(
	trainer_id varchar(15) primary key,
	first_name varchar(20),
	last_name varchar(20),
	birthday date
);

insert into instructor values('1','David','Botero','1994-08-17'::date);
insert into instructor values('2','Carolina','Quintero','2000-08-19'::date);

select * from instructor;

create table trainer_event(
	event_id int,
	event_name varchar(30),
	description text,
	start_date timestamp,
	end_date timestamp,
	created_at timestamp,
	modified_at timestamp,
	trainer_id varchar(15) references instructor (trainer_id)
);


drop table trainer_event;

select now();

create sequence trainer_event_seq
increment 1
start 1;

insert into trainer_event(event_name,description,start_date,end_date,trainer_id) values(
'Week Off', 'This is a time given to every trainer to have rest',
'2024-08-26 08:00:00','2024-08-30 18:00:00','1');

insert into trainer_event(event_name,description,start_date,end_date,trainer_id) values(
'Seminar 1', 'This a test seminar',
'2024-08-23 08:00:00','2024-08-23 10:00:00','1');

insert into trainer_event(event_name,description,start_date,end_date,trainer_id) values(
'Seminar 2', 'This a test seminar',
'2024-08-23 10:00:00','2024-08-23 12:00:00','2');

truncate table trainer_event;

select * from trainer_event;

delete from trainer_event where event_id = 0;

select current_timestamp;

alter table event
rename to trainer_event;

alter table trainer_event
alter column event_id set default nextval(event_id_seq);