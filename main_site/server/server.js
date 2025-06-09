/**
 * Main server for demo site
 */

// Imports
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config({ path: "../.env" });

const app = express();

// Setup middlware
app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");

// Setup routes
router(app);

app.listen(process.env.PORT, () => {
    console.log(`Server running at localhost:${process.env.PORT}`);
});
