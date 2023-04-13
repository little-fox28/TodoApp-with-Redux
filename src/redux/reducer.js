const initState = {
  filters: {
    search: "",
    Status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: true, priority: "Medium" },
    { id: 2, name: "Learn Php", completed: false, priority: "High" },
    { id: 3, name: "Learn MySQL", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initState, action) => {
  //action
  /** EX: {
        type: "todoList/addTodo", // Request add tasks to store
        payload: {id:5, name:'Learn English', completed: false, priority:'Low'} // DATA
    } 
  */
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state, //copy old state, absolutely do not overwrite the old state.
        todoList: [...state.todoList, action.payload]
      };

    default:
      return state;
  }
};
export default rootReducer;
