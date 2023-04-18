import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const statusTextSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusTextSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return status === "Completed" ? todo.completed : !todo.completed;
    });
  }
);
