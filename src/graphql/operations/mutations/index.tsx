import createAddTodo from "./addTodo";
import createCompleteTodo from "./completeTodo";
import createRemoveTodo from "./removeTodo";

import { todosVar } from "../../../cache";

export const todoMutatios = {
  addTodo: createAddTodo(todosVar),
  completeTodo: createCompleteTodo(todosVar),
  removeTodo: createRemoveTodo(todosVar),
};
