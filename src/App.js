import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/TodoList";
// import { Container } from "react-bootstrap";
import Schetchic from "./Components/schetchic/Schetchic";
// import { counter } from "@fortawesome/fontawesome-svg-core";
import { Home } from "./Components/home/Home";
import User from "./Components/Card/User";
import UserList from "./Components/Card/UserList";
import styles from "./App.css";
// import Cards from "./Components/Card/Cards";

// import { counter } from "@fortawesome/fontawesome-svg-core";

function App() {
  const users = [
    {
      id: 1,
      name: "Михаил Иванов",
      profession: "Программист",
      age: 33,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis deserunt quasi facere officia molestias earum dolorum veniam",
      photo: "",
    },
    {
      id: 2,
      name: "Албина Петрова",
      profession: "Дизайнер",
      age: 28,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis deserunt quasi facere officia molestias earum dolorum veniam",
    },
    {
      id: 3,
      name: "Иван Сидоров",
      profession: "Менеджер",
      age: 30,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis deserunt quasi facere officia molestias earum dolorum veniam",
    },
  ];

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "second todo",
      status: false,
    },
    {
      id: 3,
      title: "third todo",
      status: true,
    },
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="TodoList"
          element={<TodoList todo={todo} setTodo={setTodo} />}
        />
        <Route
          path="/AddTodo"
          element={<AddTodo todo={todo} setTodo={setTodo} />}
        />
        <Route path="/Shetchic" element={<Schetchic />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/userList" element={<UserList users={users} />} />
        <Route path="/users" element={<User users={users} />} />
        <Route path="users/:id" element={<User users={users} />} />
      </Routes>
    </div>
  );
}
export default App;
