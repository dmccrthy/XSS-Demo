/**
 * Main server for demo site
 */

require("dotenv").config({ path: "../.env" });

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const api = require("./api.js");

// Setup middlware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public/views"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Request Handling
app.get("/", async (req, res) => {
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

    if (result) {
        res.redirect("/");
    } else {
        // err out
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at localhost:${process.env.PORT}`);
});
