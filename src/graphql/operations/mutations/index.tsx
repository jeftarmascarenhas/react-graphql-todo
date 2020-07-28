import createAddTodo from "./addTodo";

import { todosVar } from "../../../cache";

export const todoMutatios = {
  addTodo: createAddTodo(todosVar),
};
