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
 * Get array of posts from db
 * @returns All posts from db
 */
export async function getPosts() {
    const sql = createConnection();
    return await sql`select * from Posts`;
}

/**
 * Upload post to site
 * @param {object} data HTTP POST request data
 * @returns True/False depending on upload success
 */
export async function submitPost(data) {
    if (!data.title || !data.body) {
        return false;
    }

    if (data.title.length > 100 || data.body.length > 255) {
        return false;
    }

    const sql = createConnection();
    await sql`insert into Posts ${sql(data)}`;
    return true;
}
