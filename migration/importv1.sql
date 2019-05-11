CREATE DATABASE millionaire;

CREATE TABLE millionaire.question
(
    ID  INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Q VARCHAR(250) DEFAULT NULL,
);

CREATE TABLE millionaire.reponse
(
    ID  INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Val VARCHAR(100) DEFAULT NULL,
    q_id INT(11) DEFAULT NULL ,
);

insert into question (Q)
values ('Question 1: De quelle societé Elon Musk est t-il PDG ?');

insert into reponse (Val)
values ('A: Facebook'), ('B:Tesla'),('C:Amazon'),('D:Ford');

UPDATE reponse
SET q_id = 2
WHERE id IN (21,22,23,24);