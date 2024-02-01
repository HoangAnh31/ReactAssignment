import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const refInput = useRef("");
  const [todoList, setTodoList] = useState([
    "Breakfast for my child",
    "Take him to school at 9am",
  ]);

  const updateToDoList = () => {
    setTodoList([...todoList, refInput.current.value]);
    refInput.current.value = "";
  };

  const handleAddItem = (e) => {
    updateToDoList();
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      updateToDoList();
    }
  };

  const handleRemoveItem = (index) => {
    const newArrTodo = todoList.filter(
      (todo, indexItem) => indexItem !== index
    );
    setTodoList(newArrTodo);
  };

  const listTodo = todoList.map((todo, index) => (
    <div className="item" key={index}>
      <p>
        {index + 1}. {todo}
      </p>
      <button type="button" onClick={(e) => handleRemoveItem(index)}>
        Remove
      </button>
    </div>
  ));

  return (
    <div className="App">
      <div className="control control-from">
        <input
          type="text"
          id="input_content"
          placeholder="Entering what you want to do???"
          ref={refInput}
          onKeyDown={handleKeyPress}
        ></input>
        <button className="add-todo" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="todo-list">
        <h3>The things that you need to do...</h3>
        <div className="container">{listTodo}</div>
      </div>
    </div>
  );
}

export default App;
