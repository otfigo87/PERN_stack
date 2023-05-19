import { useState } from "react";

const EditTodo = ({ todo }) => {
  // console.log(todo)
  const [description, setDescription] = useState(todo.description);
  //Edit todo description function
  const updateTodo = async (e) => {
    e.preventDefault();
    try {
        const  body = {description: description};
        const response = await fetch(`http://localhost:3001/todos/${todo.todo_id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        // console.log(response);
        window.location = "/";
    } catch (error) {
        console.log(error.message);
    }
  };
  return (
    <>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`} //match the modal to open
      >
        Edit
      </button>
      {/* id cannot be only number so we add "id" string at the beginning of todo.todo_id" */}
      <div
        class="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={(e) => updateTodo(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
