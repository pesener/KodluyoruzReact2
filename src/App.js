import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/header";
import ToDoList from "./components/todolist";
import Footer from "./components/footer";

function App() {
  const [todos, setTodos] = useState([
    {
      completed: true,
      text: "Learn JavaScript",
      id: 1,
    },
    {
      completed: false,
      text: "Learn React",
      id: 2,
    },
    {
      completed: false,
      text: "Have a life!",
      id: 3,
    },
  ]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <Header todos={todos} setTodos={setTodos} />
        </header>

        <section class="main">
          <input class="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {filteredTodos.map((todo) => {
              return (
                <ToDoList
                  status={status}
                  key={todo.id}
                  todo={todo}
                  text={todo.text}
                  todos={todos}
                  setTodos={setTodos}
                />
              );
            })}
          </ul>
        </section>

        <div className="footer">
          <Footer
            status={status}
            setStatus={setStatus}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </section>

      <footer class="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
