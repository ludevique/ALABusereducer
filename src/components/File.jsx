import React from "react";
import Task from "./Task";

function File({ tasks, dispatch }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={tasks} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default File;
