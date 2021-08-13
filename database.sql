CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path character varying(255),
    description character varying(255),
    likes integer
);