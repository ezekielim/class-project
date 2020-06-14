const express = require("express");
const app = express();
const cors = require("cors");

//imported controllers

//middleware to parse through json file type matches
app.use(express.json());
//Used to run permission for cross communications
app.use(cors());

app.get("/projects/:id", function (req, res) {
  res.send(`<h1>Hi from express</h1>`);
});

//listening port
const port = process.env.PORT || 5000;
app.listen(port, console.log(`App is listening on port ${port}`));
