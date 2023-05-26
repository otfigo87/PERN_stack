const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
//Connect to Postgres
// const pool = require("./db");
const { log } = require("console");

//middleware
app.use(cors());
app.use(express.json()); //To get data from the request (from user/client side) = req.body

//Routes
app.use('/todos', require('./routes/todos'));


app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
