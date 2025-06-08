import * as db from "./db.js";
import * as products from "./controllers/product.js";

/**
 * Add routes to a express app
 * @param {Express} app Express.js App
 */
export default function router(app) {
    /**
     * Homepage and Search
     */

    app.get("/", async (req, res) => {
        try {
            const data = await products.getProducts();
            console.log(data);

            res.render("index", { products: data });
        } catch (err) {
            res.status(500).send({ message: "Failed to Get Products: " + err });
        }
    });

    app.get("/search", async (req, res) => {
        try {
            const data = await products.getProducts();
            console.log(data);

            res.render("index", { products: data });
        } catch (err) {
            res.status(500).send({ message: "Failed to Get Products: " + err });
        }
    });

    /**
     * Product Routes
     */

    // View product page
    app.get("/products/:productID", async (req, res) => {});

    // Upload review for product
    app.post("/products/:productID/upload", async (req, res) => {
        const result = await db.submitPost(req.body);

        // Redirect with error if applicable
        if (result) {
            res.redirect("/");
        } else {
            res.redirect("/?error=400");
        }
    });

    /**
     * User Routes
     */

    // View user page
    app.get("/users/:userID", async (req, res) => {});

    app.post("/login", async (req, res) => {
        // Check password against hash
        // Issue JWT cookie
    });

    // Catch-all Routes
    app.get("/404", async (req, res) => {
        res.render("404");
    });

    app.get("/*", async (req, res) => {
        res.redirect("/404");
    });
}
