import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: ` h-screen w-screen bg-[#8f43ee]`,
  container: `bg-[#0B2447] w-2/4 min-w-fit  mt-12 m-auto  rounded-md shadow-2xl shadow-[#222831] p-4`,
  heading: `text-3xl font-bold p-3 text-center text-white shadow-xl p-3 bg-[#0B2447] drop-shadow-xl`,
  form: `flex justify-between`,
  item: `border-2 border-[#8F43EE] bg-transparent rounded-full p-2 w-full text-white text-xl`,
  button: `border rounded-full p-4 ml-2 bg-[#8F43EE] text-slate-100`,

  count: `text-center text-white p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (item === "") {
      alert("please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: item,
      completed: false,
    });
    setItem("");
  };

  //read todo

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update todo

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //delete todo

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <h3 className={style.heading}>My To Do List</h3>
      <div className={style.container}>
        <h2 className="mb-5 text-white">
          Enter tasks in field below and press the + to add to list
        </h2>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className={style.item}
            type="text"
            placeholder="Add item"
          />
          <button className={style.button}>
            <AiOutlinePlus />
          </button>
        </form>
        <ul className="mt-10">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
        <p className={style.count}>{`${todos.length} Items on list`}</p>
      </div>
    </div>
  );
}

export default App;
