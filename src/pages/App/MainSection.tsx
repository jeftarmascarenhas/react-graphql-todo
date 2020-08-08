import React from "react";
import { useQuery } from "@apollo/client";

import { Todos, Todo } from "graphql/models/Todo";
import { GET_ALL_TODOS } from "graphql/operations/queries/getAllTodos";
import TodoItem from "components/TodoItem";

const MainSection: React.FC = () => {
  const todosResult = useQuery(GET_ALL_TODOS);

  const todos: Todos = todosResult.data.todos;
  const loading: boolean = todosResult.data.loading;
  if (loading) return <div>Loading</div>;
  return (
    <div className="todos">
      {todos.length ? (
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div className="todo-item-empty">Empty</div>
      )}
    </div>
  );
};

export default MainSection;
