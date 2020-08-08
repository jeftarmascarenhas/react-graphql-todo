import React from "react";
import { useQuery } from "@apollo/client";

import "./app.css";

import { Todos, Todo } from "../../graphql/models/Todo";
import { GET_ALL_TODOS } from "../../graphql/operations/queries/getAllTodos";

import Header from "./Header";

function App() {
  const todosResult = useQuery(GET_ALL_TODOS);

  const todos: Todos = todosResult.data.todos;
  const loading: boolean = todosResult.data.loading;

  if (loading) return <div>Loading</div>;
  return (
    <div className="app">
      <Header />
      <div className="todos">
        {todos.length ? (
          todos.map((todo: Todo) => (
            <div key={todo.id}>
              <span>
                <strong>ID: </strong>
                {todo.id}
              </span>
              <span>
                <strong>Text: </strong>
                {todo.text}
              </span>
              <span>
                <strong>Completed: </strong>
                {todo.completed ? "Done" : "No"}
              </span>
            </div>
          ))
        ) : (
          <div className="todo-item-empty">Empty</div>
        )}
      </div>
    </div>
  );
}

export default App;
