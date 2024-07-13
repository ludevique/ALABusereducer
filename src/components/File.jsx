import React from "react";
import Task from "./Task";

function File({ tasks, dispatch }) {
  return (
    <div>
      <ol className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task.title} dispatch={dispatch} />
        ))}
      </ol>
    </div>
  );
}

export default File;
