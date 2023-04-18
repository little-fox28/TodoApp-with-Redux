// const addTodoAction = {
//     type :'todoList/addTodo',
//     payload : { id: 5, name: "Learn English", completed: false, priority: "Low" }
// }

// actionCreator => function
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFiler = (text) => {
  return { 
    type: "filters/searchFilterChange", 
    payload: text
  };
};

export const statusFilterChange = (status) => {
  return { 
    type: "filters/statusFilterChange", 
    payload: status
  };
};
