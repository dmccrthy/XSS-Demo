/**
 * Product Controller:
 *
 * Includes functions to handle CRUD operations
 * related to products in our database
 */

import { sql } from "../db";

/**
 * Get array of products from db
 * @returns All products from db
 */
export async function getProducts() {
    return await sql`select * from products`;
}

/**
 * Get specific product from db
 * @param {Number} product Product_id to retreive
 * @reurns Product data with given id
 */
export async function getProductByID(product) {
    return sql`SELECT * FROM products WHERE product_id = ${product}`;
}

/**
 * Get array of reviews from db
 * @param {Number} product Product_id of current product
 * @returns All reviews from db
 */
export async function getReviews(product) {
    return sql`SELECT * FROM reviews WHERE product_id = ${product}`;
}

/**
 * Upload review to product page
 * @param {object} data HTTP POST request data
 * @returns True/False depending on upload success
 */
export async function submitReview(data) {
    if (!data.title || !data.body) {
        return false;
    }

    if (data.title.length > 100 || data.body.length > 255) {
        return false;
    }

    await sql`INSERT INTO reviews ${sql(data)}`;
    return true;
}
