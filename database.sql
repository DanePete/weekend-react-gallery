CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    path character varying(255),
    description character varying(255),
    likes integer
);

INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(2, 'images/1.jpg', 'You will remember to wash your hands, won''t you?', 2) RETURNING "id", "path", "description", "likes";
INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(3, 'images/2.jpg', 'You''re a fasinating creature?', 10) RETURNING "id", "path", "description", "likes";
INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(4, 'images/3.jpg', 'Beach Day', 5) RETURNING "id", "path", "description", "likes";
INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(5, 'images/4.jpg', 'I wonder what the trees are thinking', 19) RETURNING "id", "path", "description", "likes";
INSERT INTO "public"."gallery"("id", "path", "description", "likes") VALUES(6, 'images/5.jpg', 'You''d think they''d fix this..', 55) RETURNING "id", "path", "description", "likes";