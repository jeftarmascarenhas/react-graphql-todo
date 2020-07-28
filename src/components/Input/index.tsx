import React, { useState } from "react";

interface InputProps {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
}

const Input: React.FC<InputProps> = ({
  onSave,
  text,
  placeholder,
  editing,
  newTodo,
}) => {
  const [textValue, setTextValue] = useState(text || "");

  const handleSubmit = (e: any): void => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setTextValue("");
      }
    }
  };

  const handleChange = (e: any): void => {
    setTextValue(e.target.value);
  };

  const handleBlue = (e: any): void => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      onChange={handleChange}
      onKeyDown={handleSubmit}
      type="text"
      onBlur={handleBlue}
      value={textValue}
      placeholder={placeholder}
    />
  );
};

export default Input;
