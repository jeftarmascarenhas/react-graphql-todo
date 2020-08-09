import { ReactiveVar } from "@apollo/client";

import { Todos } from "graphql/models/Todo";

export default function createEditTodo(todosVar: ReactiveVar<Todos>) {
  return (id: number, text: string) => {
    const allTodos = todosVar();
    todosVar(
      allTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };
}
