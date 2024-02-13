import { useState } from "react";
import TodoItem from "./TodoItem";

type TodoType = {
  id: number;
  name: string;
};
const TodoList = () => {
  const [todosList, setTodosList] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState("");

  const handleClick = () => {
    setTodosList((prev) => [...prev, { id: Math.random(), name: todoText }]);
    setTodoText("");
  };

  const deleteTodo = (id: number) => {
    setTodosList((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id: number, value: string) => {
    const updatedTodos = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: value };
      }
      return todo;
    });
    setTodosList(updatedTodos);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={handleClick}>Add Todo</button>
      <div>
        {todosList.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
