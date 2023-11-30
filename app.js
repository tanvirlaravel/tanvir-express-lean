const express = require("express");
const router = require("./route");
const app = express();

// Using express.text() middleware
app.use(express.text());
app.use("/text-data", router);

app.listen(3000, () => console.log("Server is running on port 3000"));
