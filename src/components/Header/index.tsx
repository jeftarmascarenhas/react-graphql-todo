import React from "react";

import Input from "../Input";

interface HeaderProps {
  addTodo: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({ addTodo }) => {
  return (
    <div>
      <h1>To do List React and GraphQL</h1>
      <Input
        newTodo
        onSave={(text: string): void => {
          if (text.length !== 0) {
            addTodo(text);
          }
        }}
        placeholder="What need to be done?"
      />
    </div>
  );
};

export default Header;
