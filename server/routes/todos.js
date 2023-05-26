const express = require('express');
const router = express.Router();
const { createPost, getTodos, getTodo, deleteTodo, editTodo } = require('../controllers/todos');

//create Post
router.post("/", createPost);
//get all todos
router.get("/", getTodos);
//get one todo
router.get("/:id", getTodo);
//delete
router.delete("/:id", deleteTodo);
//update
router.put("/:id", editTodo);



module.exports = router;