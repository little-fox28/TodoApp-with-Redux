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
