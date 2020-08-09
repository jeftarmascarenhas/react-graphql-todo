import createAddTodo from "./todos/addTodo";
import createCompleteTodo from "./todos/completeTodo";
import createRemoveTodo from "./todos/removeTodo";
import createEditTodo from "./todos/editTodo";

import { todosVar } from "../../../cache";

export const todoMutatios = {
  addTodo: createAddTodo(todosVar),
  completeTodo: createCompleteTodo(todosVar),
  removeTodo: createRemoveTodo(todosVar),
  editTodo: createEditTodo(todosVar),
};
