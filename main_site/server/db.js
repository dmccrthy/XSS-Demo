/**
 * Functions for API to DB connections.
 * See server.js for actual request handling
 */

import dotenv from "dotenv";
import { SQL } from "bun";

dotenv.config({ path: "../.env" });

/**
 * Open a psql connection using .env credentials
 */
let { PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE } = process.env;

export const sql = new SQL({
    url: `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`,
});

/**
 * Retreive the current highest ID from a given table.
 * This is a general function that can be used on any table.
 * @param {String} table Table to search
 * @returns Integer value of ID
 */
export async function getMaxID(table) {
    const sql = createConnection();

    switch (table) {
        case "products":
            return await sql`SELECT MAX(product_id) FROM products`;
        case "reviews":
            return await sql`SELECT MAX(review_id) FROM reviews`;
        case "users":
            return await sql`SELECT MAX(user_id) FROM users`;
    }

    return null;
}

/**
 * Initiliaze the psql database if necessary
 * This cover creating necessary tables and loading placeholder data.
 */
export function databaseInitialize() {}
