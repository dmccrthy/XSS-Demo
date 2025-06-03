import * as db from "./db.js";

/**
 * Add routes to a express app
 * @param {Express} app Express.js App
 */
export default function router(app) {
    app.get("/", async (req, res) => {
        let error = req.query.error;

        console.log(error);

        try {
            const posts = await db.getPosts();
            console.log(posts);

            res.render("index", { messages: posts });
        } catch (err) {
            res.status(500).send({ message: "Failed to Get Posts!" });
        }
    });

    app.post("/login", async (req, res) => {
        // Check password against hash
        // Issue JWT cookie
    });

    app.post("/upload", async (req, res) => {
        const result = await db.submitPost(req.body);

        // Redirect with error if applicable
        if (result) {
            res.redirect("/");
        } else {
            res.redirect("/?error=400");
        }
    });

    app.get("/404", async (req, res) => {
        res.render("404");
    });

    app.get("/*", async (req, res) => {
        res.redirect("/404");
    });
}
