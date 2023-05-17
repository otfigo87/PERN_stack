const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
//Connect to Postgres
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //To get data from the request (from user/client side) = req.body

//Routes
//create todo
app.post("/todos", async (req, res) => {
  try {
    const description = req.body.description;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *", // RETURNING * : return the newly inserted row
      [description] // the $1 will be replaced with what in the []
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

//get all todo
app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
});

//get a todo
app.get("/todos/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const theTodo = await pool.query("SELECT * From todo WHERE todo_id = $1",
         [id] ); // the $1 will be replaced with what in the []
         res.json(theTodo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

//update todo
app.put("/:id", function (req, res) {});
//delete todo
app.delete("/:id", function (req, res) {});

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
