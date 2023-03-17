const router = require("express").Router();

router.get("/products", (req, res) => {
  res.render("products", {
    title: "My Poducts Page",
  });
});

module.exports = router;
