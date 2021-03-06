const router = require("express").Router();
const userRoutes = require("./user.routes");
const authRoutes = require("./auth.routes");
const catRoutes = require("./cat.routes");
const objectRoutes = require("./object.routes");
const annonceRoutes = require("./annonce.routes");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/category", catRoutes);
router.use("/object", objectRoutes);
router.use("/annonce", annonceRoutes);

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
