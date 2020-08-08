import { ReactiveVar } from "@apollo/client";

import { Todos } from "graphql/models/Todo";

export default function createRemoveCompleted(todosVar: ReactiveVar<Todos>) {
  return (id: number) => {
    const allTodos = todosVar();
    todosVar(allTodos.filter((todo) => todo.id !== id));
  };
}
