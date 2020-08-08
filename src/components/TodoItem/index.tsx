import React from "react";

import { Todo } from "graphql/models/Todo";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.text}</span>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
