import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";

import { Todos } from "./graphql/models/Todo";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read(_, { variables }) {
            window.localStorage.setItem("todos", JSON.stringify(todosVar()));
            return todosVar();
          },
        },
      },
    },
  },
});

const todoStorage = window.localStorage.getItem("todos");

const getTodos: Todos = todoStorage ? JSON.parse(todoStorage) : [];

const todosInitialValue: Todos = [
  {
    id: 0,
    text: "First Task",
    completed: false,
  },
  ...getTodos,
];

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(todosInitialValue);
