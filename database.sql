CREATE TABLE customer (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE post(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(50) NOT NULL,
    customer_id INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customer (id) ON UPDATE CASCADE
);

