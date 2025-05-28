/**
 * Main server for demo site
 */

// Imports
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import * as api from "./api.js";

dotenv.config({ path: "../.env" });

const app = express();

// Setup middlware
app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Request Handling
app.get("/", async (req, res) => {
    let error = req.query.error;

    console.log(error);

    try {
        const posts = await api.getPosts();
        console.log(posts);

        res.render("index", { messages: posts });
    } catch (err) {
        res.status(500).send({ message: "Failed to Get Posts!" });
    }
});

app.post("/upload", async (req, res) => {
    const result = await api.submitPost(req.body);

    // Redirect with error if applicable
    if (result) {
        res.redirect("/");
    } else {
        res.redirect("/?error=400");
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at localhost:${process.env.PORT}`);
});
