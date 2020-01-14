CREATE DATABASE IF NOT EXISTS notable;

USE notable;

DROP TABLE IF EXISTS doctors;

CREATE TABLE doctors (
  id int NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  date DATETIME,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
  id int NOT NULL AUTO_INCREMENT,
  doctor_id int,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  date DATETIME,
  kind ENUM ('New Patient','Follow-up'),
  PRIMARY KEY (id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);
