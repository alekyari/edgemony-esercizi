import { useState } from "react";
import ToDoItem from "../toDoItem";
import "./index.css";
import toDO from "../../mock/toDo"

const ToDoList = () => {
  const [toDoInput, setToDoInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [filter, setFilter] = useState(false);


  const onHandleSubmit = (e) => {
    e.preventDefault();
    toDO.push(
      {
      id: 100,
      todo: toDoInput,
      completed: false,
      userId: 30
      });setCounter(prev=>prev+1);
  };

  const onHandleSubmitFilter = (e) => {
    e.preventDefault();
    setCounter(prev=>prev+1);
    setFilter(true);
  };

  return (
    <div className="toDolist">
      <h3>toDo List</h3>
      <div className="wrap">
      {counter !== 0  ? (filter? toDO.filter((data) => data.completed == false) : toDO).map((item) => (
        <ToDoItem data={item} key={item.id} />
      )) : null}</div>
<div >
        <form onSubmit={onHandleSubmit} action="submit" className="toDo_input">
        <input
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)}
            type="text"
            placeholder="ToDo ..."
            required
          /> 
       <input className="button_input"
            type="submit"
            value="Add a new toDo" />
         </form>
         <form onSubmit={onHandleSubmitFilter} action="submit" className="toDo_filter">
        
       <input className="filter_input"
            type="submit"
            value="Remove Done Todos" />
         </form>
      
      </div>
      
      
    </div>
  );
};

export default ToDoList;
