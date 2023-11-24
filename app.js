//links   https://www.geeksforgeeks.org/express-js-express-static-function/

const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

// Static Middleware
app.use(express.static(path.join(__dirname, "public")));
// __dirname
// C:\Users\Tanvir\Desktop\0projects\express\express-app

// path.join(__dirname)
// C:\Users\Tanvir\Desktop\0projects\express\express-app

// path.join(__dirname, "public")
// C:\Users\Tanvir\Desktop\0projects\express\express-app\public

app.get("/", function (req, res, next) {
  console.log(__dirname);
  res.render("home.ejs");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
