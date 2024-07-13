export default function reducer(state, action) {
  switch (action.type) {
    case "add_task":
    case "edit_task":
    case "remove_task":
    default:
      throw console.error("unknow action");
  }
}
