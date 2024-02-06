import { useState, useRef } from "react";

const TodoList = () => {
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
    if (e.key === "Enter") {
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
    <div className="flex mb-3 text-lg justify-between items-center" key={index}>
      <p className="text-[16px] mr-5">
        {index + 1}. {todo}
      </p>
      <button
        type="button"
        onClick={(e) => handleRemoveItem(index)}
        className="text-[16px] bg-white text-center rounded-full  box-border  h-7 w-7 leading-[16px]"
      >
        X
      </button>
    </div>
  ));

  return (
    <>
      <div className="inline-flex w-full mt-5 mb-2.5 mx-0">
        <input
          type="text"
          id="input_content"
          placeholder="Entering what you want to do???"
          ref={refInput}
          onKeyDown={handleKeyPress}
          className="w-full box-border p-2.5 rounded-[5px] border-none placeholder:italic outline-none focus:border focus:outline-none focus:border-yellow-500 focus:ring focus:ring-yellow-200"
        ></input>
        <button className="btn-gradients ml-5" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <div className="todo-list">
        <h3 className="text-white text-2xl my-5 font-bold">
          The things that you need to do...
        </h3>
        <div className="container">{listTodo}</div>
      </div>
    </>
  );
};

export default TodoList;
