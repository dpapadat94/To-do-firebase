const style = {
  li: `flex justify-between  bg-white p-4 my-3 capitalize border-b-2 border-slate-200`,
  liComplete: `flex justify-between rounded-full bg-green-200 p-4 my-2 capitalize`,
  row: `flex  items-center	`,
  text: `ml-2  cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer text-white rounded-full py-1 px-2 bg-red-400 hover:bg-red-600 `,
  buttonComplete: `cursor-pointer text-white rounded-full py-1 px-2 bg-green-500 hover:bg-green-600`,
};

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      {todo.completed === false ? (
        <button className={style.button} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      ) : (
        <button
          className={style.buttonComplete}
          onClick={() => deleteTodo(todo.id)}
        >
          Clear completed
        </button>
      )}
    </li>
  );
}

export default Todo;
