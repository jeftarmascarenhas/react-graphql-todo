import React from "react";

import { Todo } from "graphql/models/Todo";

interface TodoItemProps {
  todo: Todo;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  completeTodo,
  removeTodo,
}) => {
  return (
    <div
      className={`${"todo-item"} ${
        todo.completed ? "todo-item--completed" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => completeTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button className="btn-close" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
