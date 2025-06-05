/**
 * Functions for API to DB connections.
 * See server.js for actual request handling
 */

import dotenv from "dotenv";
import { SQL } from "bun";

dotenv.config({ path: "../.env" });

/**
 * Open a psql connection using .env credentials
 * @returns Open psql connection or error
 */
function createConnection() {
    let user = process.env.PG_USER;
    let pass = process.env.PG_PASSWORD;
    let host = process.env.PG_HOST;
    let port = process.env.PG_PORT;
    let db = process.env.PG_DATABASE;

    return new SQL({
        url: `postgres://${user}:${pass}@${host}:${port}/${db}`,
    });
}

/**
 * Initiliaze the psql database if necessary
 * This cover creating necessary tables and loading placeholder data.
 */
function databaseInitialize() {}
