import { useState } from "react";
import "./index.css";



const InputModel = ({ setList, setSort, setFilter }) => {
  const [toDoInput, setToDoInput] = useState("");
 
  
  
   
  const onHandleSubmit = (e) => {
    e.preventDefault();


    // Ho provato ad inserire un ternario al posto dell'if ma non ha funzionato 

    // setList((prev)=>{!prev.find((item) => item.todo === toDoInput) ?  [
    //   ...prev, {
    //   id: prev.length + 1,
    //   todo: toDoInput,
    //   completed: false,
    //   } ]
    //   :
    //   prev; alert("ciao")
      
    //     })


    // setList((prev)=>[
    //   ...prev, {
    //   id: prev.length + 1,
    //   todo: toDoInput,
    //   completed: false,
    //   } ])
  

    setList((prev) => {
      if (
        !prev.find(
          (item) => item.todo.toLowerCase() === toDoInput.toLowerCase()
        )
      ) {
        return [
          ...prev,
          {
            id: prev.length + 1,
            todo: toDoInput,
            completed: false,
          },
        ];
      } else {
        alert("Existing Value");
        return prev;
      }
    })


  };


  const onHandleSortSubmit = (e) => {
    e.preventDefault();
    setSort(true);

   

  };
  const onHandleFilterSubmit = (e) => {
    e.preventDefault();
    setFilter(true);
  };



const onInputChange = (e) => setToDoInput(() => e.target.value);
    return (
      <div className="form_wrapper">
      <form onSubmit={onHandleSubmit} action="submit" className="toDo_input">
      <input className="newtoDo_input"
          value={toDoInput}
          onChange={onInputChange}
          type="text"
          placeholder="ToDo ..."
          required
        /> 
     <input className="button_input"
          type="submit"
          value="Add a new toDo" />
       </form>

       <form onSubmit={onHandleFilterSubmit} action="submit" className="toDo_filter">
      
     <input className="filter_input"
          type="submit"
          value="Remove Done Todos" />
       </form>
    


       <form onSubmit={onHandleSortSubmit} action="submit" className="toDo_sort">
      
      <input className="sort_input"
           type="submit"
           value="Sort toDo" />
        </form>
    </div>
      );
    };
    
    export default InputModel;