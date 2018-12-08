drop database if exists otTopTen;
create database if not exists otTopTen character set utf8;
use otTopTen;

create table topTen (id integer not null primary key auto_increment, playerName varchar(50), playerScore Integer, dateEarned varchar(15));

insert into topTen (playerName, playerScore, dateEarned) values ('Mike',500,'2018/12/7');
insert into topTen (playerName, playerScore, dateEarned) values ('Duncan', 300, '2018/12/7');
insert into topTen (playerName, playerScore, dateEarned) values ('Chris', 700, '2018/12/7');

create user 'ttUser'@'localhost' identified by '12345';
grant all on otTopTen.topTen to 'ttUser'@'localHost';