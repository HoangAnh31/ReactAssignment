//import "./App.css";
import TodoList from "./Components/ToDoList";
import GetResources from "./Components/GetResources";
import Countdown from "./Components/CountDown";

function App() {
  return (
    <>
      <h1 className="text-center font-medium text-[18px] md:text-[30px] my-5 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
        Hello, This is Tailwindcss style
      </h1>
      <section className="section">
        <TodoList></TodoList>
      </section>
      <section className="section">
        <GetResources></GetResources>
      </section>
      <section className="section">
        <Countdown></Countdown>
      </section>
    </>
  );
}

export default App;
