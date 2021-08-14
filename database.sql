CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path character varying(255),
    description character varying(255),
    likes integer
);

INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(4, 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park21231', 13) RETURNING "id", "path", "description", "likes";
