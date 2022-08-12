CREATE DATABASE firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('tomas', 'aybar.t4@gmail.com'),
    ('brxyny', 'gamerd2.1307@gmail.com');