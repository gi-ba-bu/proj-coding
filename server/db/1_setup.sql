DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    main varchar(500) NOT NULL,
    username varchar(50) NOT NULL
);
