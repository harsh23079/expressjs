const router = require("express").Router();
const path = require("path");
const middleware = require("../middlewares/apiKey");

// for whole routes
// router.use(middleware);

router.get("/", (req, res) => {
  res.render("index", {
    title: "My Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My About Page",
  });
});
// for single routes and multiple
// "/api/products", [middleware,middleware2], (req, res) =>{}
router.get("/api/products", middleware, (req, res) => {
  res.json([
    {
      id: "123",
      name: "Google",
    },
    {
      id: "456",
      name: "Chrome",
    },
  ]);
});

router.get("/download", (req, res) => {
  console.log("d:-", __dirname);
  res.download(path.join(__dirname, "../views/about.ejs"));
});

module.exports = router;
