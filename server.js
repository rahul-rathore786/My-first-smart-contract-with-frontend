const express = require("express");
const app = express();
const path = require("path");
const nodemon = require("nodemon");

// home route to access the index.html files
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
}
);

// listen on port 3500
app.listen(3500, () => {
    console.log("Server is listening on port 3500");
}
);
