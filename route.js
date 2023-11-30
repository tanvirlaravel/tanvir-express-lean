const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Text data received:", req.body);
  res.send("Text data processed");
});

module.exports = router;
