import React, { useState } from "react";

function Task({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [newTask, setNewTask] = useState(task.title);

  // handlers
  function handleEdit() {
    setIsEditing(true);
  }
  function handleDelete() {
    dispatch({ type: "remove_task", id: task.id });
  }
  function handleSave() {
    dispatch({ type: "edit_task", id: task.id, newTask });
    setIsEditing(false);
  }
  function handleIsCompleted() {
    setIsCompleted(!isCompleted);
  }
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleIsCompleted}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>save edit</button>
        </>
      ) : (
        <>
          <span>{task}</span>
          <button type="submit" onClick={handleEdit}>
            edit
          </button>
          <button type="submit" disabled={!isCompleted} onClick={handleDelete}>
            delete
          </button>
        </>
      )}
    </li>
  );
}

export default Task;
