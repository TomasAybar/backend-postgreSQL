CREATE DATABASE firstapi;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('tomas', 'aybar.t4@gmail.com'),
    ('brxyny', 'gamerd2.1307@gmail.com');



CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(40),
    password VARCHAR(40)
);

INSERT INTO productos (usuario, password) VALUES
    ('admin', '12345678'),
    ('tomas', '54321'),
    ('gonzalo', 'Espinlabs');

-- TRAIGO TODOS MIS CLIENTES
SELECT * FROM Cliente; 

SELECT * FROM Cliente WHERE clie_vendedor 

-- TRAE EL PRODUCTO
SELECT * FROM Item_Factura WHERE item_producto;

-- TRAE LA CANTIDAD DE 
SELECT * FROM Item_Factura WHERE item_cantidad;