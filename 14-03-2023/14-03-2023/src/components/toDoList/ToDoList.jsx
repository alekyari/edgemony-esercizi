import { useState } from "react";
import ToDoItem from "../toDoItem";
import "./index.css";


const ToDoList = ({list, setList, sort, filter}) => {
let newList = []
{sort? newList=list.sort((item1, item2) => (item1.todo >= item2.todo ? 1 : -1)) : newList=list}
{filter? newList=list.filter(item=> item.completed === false) : newList=list}
  return (
    <div className="toDolist">
      <h3>toDo List</h3>
      <div className="wrap">
      
      
      
      
      {newList.map((item) => (
        <ToDoItem setList={setList} item={item} key={item.id} />
      ))}
      
      
      
      
      </div>

      
      
    </div>
  );
};

export default ToDoList;
