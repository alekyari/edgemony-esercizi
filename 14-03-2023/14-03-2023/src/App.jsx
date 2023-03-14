import { useState } from 'react';
import './App.css';
import ToDoList from "./components/toDoList";
import toDO from "./mock/toDo";
import InputModel from './components/inputModel';

function App() {
  const [list, setList] = useState(toDO)
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);


  return (
    <div className="App">
      <ToDoList list={list} setList={setList} sort={sort} filter={filter}/>
      <InputModel setList={setList} setSort={setSort} setFilter={setFilter}/>
    </div>
  )
}

export default App
