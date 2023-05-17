const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());// To get data from the request (from user/client side)

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
