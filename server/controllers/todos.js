const pool = require("../db");

const createPost = async (req, res) => {
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
};

const getTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const theTodo = await pool.query("SELECT * From todo WHERE todo_id = $1", [
      id,
    ]); // the $1 will be replaced with variable inside the []
    res.json(theTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (error) {
    console.log(error.message);
  }
};

const editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE TODO_ID = $2",
      [description, id]
    );

    res.json("todo was updated!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {createPost, getTodos, getTodo, deleteTodo, editTodo };