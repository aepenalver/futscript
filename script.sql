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

INSERT INTO usuarios(id, username, password)
	VALUES (DEFAULT, 'admin', '$2b$10$hHxUYmRY8wu7wz9fwrLv/usfZETVBIpNioydArLCGhZEQoBrDrHSq')
;

INSERT INTO equipos(id, name)
	VALUES 
        (DEFAULT, 'Super Equipo'),
        (DEFAULT, 'Mega Equipo'),
        (DEFAULT, 'Hiper Equipo')
;

INSERT INTO posiciones(id, name)
    VALUES 
        (DEFAULT, 'delantero'),
        (DEFAULT, 'centrocampista'),
        (DEFAULT, 'defensa'),
        (DEFAULT, 'portero')
;

INSERT INTO jugadores(id, id_equipo, name, position)
	VALUES 
        (DEFAULT, 1, 'Jugador 1', 2),
	    (DEFAULT, 3, 'Jugador 2', 4),
	    (DEFAULT, 2, 'Jugador 3', 1),
	    (DEFAULT, 3, 'Jugador 4', 3),
	    (DEFAULT, 2, 'Jugador 5', 1),
	    (DEFAULT, 1, 'Jugador 6', 3),
	    (DEFAULT, 2, 'Jugador 7', 4),
	    (DEFAULT, 1, 'Jugador 8', 2),
	    (DEFAULT, 3, 'Jugador 9', 1),
	    (DEFAULT, 1, 'Jugador 10', 2)
;