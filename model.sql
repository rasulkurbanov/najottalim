CREATE TABLE posts (
	id bigserial not null,
	full_name varchar(64) not null,
	phone_number varchar(64) not null,
	course_type varchar(65) not null,
	PRIMARY KEY(id)
)