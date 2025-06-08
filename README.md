# XSS-Demo Presentation

This repo was developed to demo a handful of different web based attacks. It was used in a presentation by me (Dan McCarthy), and I welcome anyone who is interested to use it themselves for a demo.


## Develop:

To create the main database you can run the following command. You can change the user, password, and db variables as needed. Additionally the init.sql script is automatically copied to the image and run so demo data should already be loaded.

```shell
docker run --name xss_demo -p 5432:5432 -e POSTGRES_PASSWORD=1234 -e POSTGRES_USER=admin -e POSTGRES_DB=main -v init.sql:/docker-entrypoint-initdb.d/init.sql -d postgres
```
From here you should setup a .env file in the root of the project. Make sure to use the user/password/db you set on the container. It should look something like this:

```shell
PORT=9090 // Main site
PG_HOST=localhost
PG_PORT=5432 // PSQL Container
PG_USER=admin
PG_PASSWORD=password123
PG_DATABASE=db // DB to use
```

After setting that up you can run:

```shell
bun run start 
```

## Production*:

If you don't care about the details, you should be able to run it without issue using docker compose. (NOTE: You should create a .env file as mentioned above)

```shell
docker compose up
```
