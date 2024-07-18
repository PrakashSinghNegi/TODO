import { useState } from "react"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import TODOHero from "./components/TODOHero/TODOHero"
import TODOList from "./components/TODOList/TODOList"
import './styles.css'

export default function App() {
  const [todos, setTodos] = useState([]);

  const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header></Header>
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TODOList setTodos={setTodos} todos={todos} />
    </div>
  )
}