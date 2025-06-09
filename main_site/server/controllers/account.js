/**
 * Account Controller:
 *
 * Includes functions to handle CRUD operations
 * related to user accounts in the db
 */

import { sql } from "../db";

/**
 * Get user account data from db using id
 * @param {Number} id User account id
 */
export async function getAccountByName(name) {
    return await sql`SELECT * FROM Users WHERE username = ${name}`;
}
