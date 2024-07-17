import { useState } from "react";

function Task({ task, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [newTask, setNewTask] = useState(task.title || "");

  //----------------------functions handlers--------------------------------
  function handleEdit() {
    setIsEditing(true);
  }
  function handleDelete() {
    dispatch({ type: "remove_task", id: task.id });
  }
  function handleSave(e) {
    e.preventDefault();
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
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">save edit</button>
        </form>
      ) : (
        <>
          <span>{task.title}</span>
          <button type="submit" onClick={handleEdit}>
            EditButton
          </button>
          <button type="submit" disabled={!isCompleted} onClick={handleDelete}>
            DeleteButton
          </button>
        </>
      )}
    </li>
  );
}

export default Task;