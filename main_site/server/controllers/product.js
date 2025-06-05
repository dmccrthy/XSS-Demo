/**
 * Product Controller:
 *
 * Includes functions to handle CRUD operations
 * related to products in our database
 */

/**
 * Get array of posts from db
 * @returns All posts from db
 */
export async function getProducts() {
    const sql = createConnection();
    return await sql`select * from posts`;
}

/**
 * Get array of posts from db
 * @param {Number} product Product_id of current product
 * @returns All posts from db
 */
export async function getReviews(product) {
    const sql = createConnection();
    return await sql`select * from posts`;
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

    const sql = createConnection();
    await sql`insert into Reviews ${sql(data)}`;
    return true;
}
