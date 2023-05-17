const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
//Connect to Postgres
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());// To get data from the request (from user/client side)

//Routes

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
