import React, { useState } from "react";

function AddTask({ dispatch }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "add_task", title });
    setTitle("");
  }

  return (
    <div className="addtask">
      <div className="addtask-add">
        <h4>Add your task,do it on time!! </h4>
      </div>
      <div className="addtask-content">
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            placeholder="enter your task "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
