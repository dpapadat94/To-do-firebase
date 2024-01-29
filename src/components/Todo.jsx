const style = {
  li: `flex justify-between  bg-[#8f43ee] p-4 my-4 capitalize border rounded-full  border-white`,
  liComplete: `flex justify-between rounded-full bg-green-200 p-4 my-4 capitalize`,
  row: `flex  items-center 	`,
  text: `ml-2 text-white text-xl cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer text-white rounded-full py-1 px-2 bg-[#071952] border hover:bg-red-500 `,
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
          Click to clear task
        </button>
      )}
    </li>
  );
}

export default Todo;
