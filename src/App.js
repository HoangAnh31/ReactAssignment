import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Components/ToDoList";
import GetResources from "./Components/GetResources";

function App() {
  return (
    <>
      <section>
        <TodoList></TodoList>
      </section>
      <section>
        <GetResources></GetResources>
      </section>
    </>
  );
}

export default App;
