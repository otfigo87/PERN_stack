import { useEffect, useState } from "react";

const ListTodos = () => {

  const [todos, setTodos] = useState([]);

  const getTodos = async() => {
    try {
      const response = await fetch("http://localhost:3001/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
      // console.log(todos);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getTodos();
  }, [todos]);

  //delete function
  const deleteTodo = async(id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <button className="btn ">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ); 
};

export default ListTodos;
