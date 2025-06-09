import * as argon2 from "argon2";

/**
 * Hash password on account creation
 * @param {String} password User input password
 * @returns Hashed password
 */
export async function hashPassword(password) {
    return await argon2.hash(password);
}

/**
 * Verify an input password against its hash
 * @param {String} password Password input by user
 * @param {String} hash Hashed password from db
 * @returns Boolean based on password verification
 */
export async function verifyPassword(hash, password) {
    return await argon2.verify(hash, password);
}

function issueJWT() {}

/**
 * Middleware to verify jwt cookie
 * @param {*} req HTTP Request
 * @param {*} res HTTP Response
 * @param {Function} next Next function
 */
export function verifyJWT(req, res, next) {
    let jwt = req.cookies.jwt;

    next();
}
