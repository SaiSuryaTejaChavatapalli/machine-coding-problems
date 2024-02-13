import { useRef } from "react";

type TodoItemProps = {
  id: number;
  name: string;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, value: string) => void;
};
const TodoItem: React.FC<TodoItemProps> = ({
  name,
  deleteTodo,
  id,
  updateTodo,
}) => {
  const updateRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <span>{name}</span>
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
      <input type="text" placeholder="Update Todo" ref={updateRef} />
      <button onClick={() => updateTodo(id, updateRef.current!.value)}>
        Update Todo
      </button>
    </div>
  );
};

export default TodoItem;
