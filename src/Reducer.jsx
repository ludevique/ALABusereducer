export default function reducer(state, action) {
  switch (action.type) {
    case "add_task": {
      return [{ id: Date.now(), title: action.title }, ...state];
    }
    case "edit_task": {
      return state.map((task) =>
        task.id === action.id ? { ...state, title: action.newTask } : task
      );
    }
    case "remove_task": {
      return state.filter((task) => task.id !== action.id);
    }
    default:
      return state;
  }
}
