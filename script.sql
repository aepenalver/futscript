CREATE DATABASE futscript;
\c futscript;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE equipos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL
);

CREATE TABLE posiciones (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(250) NOT NULL
);

CREATE TABLE jugadores (
    id SERIAL PRIMARY KEY, 
    id_equipo INT REFERENCES equipos(id), 
    name VARCHAR(250), 
    position INT REFERENCES posiciones(id)
);

INSERT INTO posiciones values 
    (DEFAULT, 'delantero'),
    (DEFAULT, 'centrocampista'),
    (DEFAULT, 'defensa'),
    (DEFAULT, 'portero')
;
