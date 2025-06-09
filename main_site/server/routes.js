import * as db from "./db.js";
import * as auth from "./auth.js";
import * as products from "./controllers/product.js";
import * as accounts from "./controllers/account.js"

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

            res.render("index", { products: data });
        } catch (err) {
            res.status(500).send({ message: "Failed to Get Products: " + err });
        }
    });

    app.get("/search", async (req, res) => {
        // ./search?q=item&p=1
        let query = req.query.q;
        let page = req.query.p;

        // Handle invalid params
        if ((query === null) | (page === null)) {
            res.redirect("/");
        }

        try {
            const data = await products.getProducts();

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
        let { username, password } = req.body;

        // Check inputs
        if (!username | !password) {

        }

        let hash = accounts.getAccountByName(username);

        // Check password against hash
        if (!auth.verifyPassword())

        // Issue JWT cookie
    });

    app.get("/logout", async (req, res) => {});

    // Catch-all Routes
    app.get("/404", async (req, res) => {
        res.render("404");
    });

    app.get("/*", async (req, res) => {
        res.redirect("/404");
    });
}
