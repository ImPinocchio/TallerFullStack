CREATE DATABASE mascotas_db;


CREATE TABLE mascota (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(40),
    especie VARCHAR(40),
    esta_vacunado BOOLEAN,
    fecha_nacimiento DATE
);

INSERT INTO mascota (nombre, especie, esta_vacunado, fecha_nacimiento) 
VALUES ('Gwen', 'gato', true, '2021-05-20');

INSERT INTO mascota (nombre, especie, esta_vacunado, fecha_nacimiento) 
VALUES ('Firulais', 'perro', false, '2023-11-10');