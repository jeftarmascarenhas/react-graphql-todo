import { ReactiveVar } from "@apollo/client";
import { Todos } from "graphql/models/Todo";

export default function createCompleteTodo(todosVar: ReactiveVar<Todos>) {
  return (id: number) => {
    const allTodos = todosVar();
    todosVar(
      allTodos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
}
