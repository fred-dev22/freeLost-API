const express = require("express");
const app = express();
exports.app = app;

const morgan = require("morgan");
const index = require("./routes");
require("./database");
const path = require("path");
const cors = require("cors"); // pour permettre a mon backend d'accpeter les requettes cross origine
require("./config/session.config");
require("./config/passport.config");
require("./config/mail.config");
require("./config/cloudinary.config");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(index);

app.listen(3005);
