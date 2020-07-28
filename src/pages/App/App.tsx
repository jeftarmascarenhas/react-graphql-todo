import React from "react";
import { useQuery } from "@apollo/client";

import { Todos, Todo } from "../../graphql/models/Todo";
import { GET_ALL_TODOS } from "../../graphql/operations/queries/getAllTodos";

import Header from "./Header";

function App() {
  const todosResult = useQuery(GET_ALL_TODOS);
  const todos: Todos = todosResult.data.todos;
  const loading: Todos = todosResult.data.loading;
  if (loading) return <span>Loading</span>;
  console.log(todosResult);
  return (
    <div className="App">
      <Header />
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
        <div>Empty</div>
      )}
    </div>
  );
}

export default App;
