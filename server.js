// function return
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

// Ejs tell key and vlaue by using set

app.set("view engine", "ejs");

// console.log(app.get("view engine"));

// app.set("views", "templates");  templates

// app.set("views", path.resolve(__dirname) + "/templates");
// console.log(app.get("views"));

// Static middleware for static folder
// app.use(express.static("public"));

// create route
// app.get("/", (req, res) => {
//   // method
//   // res.send("hello from express...");

//   res.sendFile(path.resolve(__dirname) + "/index.html");
// });

// create route for about page
// app.get("/about", (req, res) => {
//   res.sendFile(path.resolve(__dirname) + "/about.html");
// });

// for download the file
// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname) + "/about.html");
// });

// for ejs file we do render and change title

// app.get("/", (req, res) => {
//   // data is sending on server
//   res.render("index", {
//     title: "My home page",
//   });
// });
// app.get("/about", (req, res) => {
//   res.render("about", {
//     title: "My about page",
//   });
// });

// We created router so we need to import here

const mainRouter = require("./routes/index");
app.use(mainRouter);

// app.use("en",mainRouter); 3000/en/about

// console.log("ser", __dirname);

// server run at localhost 3000 port cannot get(request) / root home page
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// for globally middleware
// const middlewares = require('../midlewares/apiKey')
// app.use(middlewares)

// for products routes

const productsRoutes = require("./routes/products");

app.use(productsRoutes);
