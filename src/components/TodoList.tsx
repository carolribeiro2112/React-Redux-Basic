import { useAppSelector } from "../store";

export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo;
  });

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo} style={{ listStyleType: "none" }}>
          <input type="checkbox" />
          {todo}
        </li>
      ))}
    </ul>
  );
}
