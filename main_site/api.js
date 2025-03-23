/**
 * Create psql connection.
 * Only use on server-side
 */

require("dotenv").config({ path: "../.env" });
const postgres = require("postgres");

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

    return postgres(`postgrsql://${user}:${pass}@${host}:${port}/${db}`);
}

/**
 * Get array of posts from db
 * @returns All posts from db
 */
async function getPosts() {
    const sql = createConnection();
    return await sql`select * from Posts`;
}

/**
 * Upload post to site
 * @param {object} data HTTP POST request data
 * @returns True/False depending on upload success
 */
async function submitPost(data) {
    if (!data.title || !data.body) {
        return false;
    }

    if (data.title.length > 100 || data.body.length > 255) {
        return false;
    }

    const sql = createConnection();
    await sql`insert into Posts (title, body) values (${data.title}, ${data.body})`;
    return true;
}

module.exports = { getPosts, submitPost };
