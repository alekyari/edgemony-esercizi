import { useContext, useState} from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  const [userName, setUserName] = useState("");
  const [todo, setTodo] = useState("");

  const onHandleUserNameInput = (e) => setUserName(e.target.value);
  const onHandleTodoInput = (e) => setTodo(e.target.value);

  const onHandleSubmit = (e) => {e.preventDefault();  onHandleNewTask() };

  const onHandleClick = () => {
    dispatch({ type: "SET_MODAL_OFF" })

   }

   const onHandleNewTask = () => {
    dispatch({type: 'CREATE_NEW_TASK', payload: {
      "id": `${state.tasksListData.length + 1 }`,
      "todo": todo,
      "completed": true,
      "userId": parseInt(userName),
    }})

  }

 

 

  return (
   
   <div className={styles.Modal}>
   <div className={styles.Modal_Overlay}>  
    <div className={styles.Modal_Main}> 
    <button onClick={onHandleClick} className={styles.Modal_Button}>X</button>
    <h1>Modal Todo</h1>
    <form className={styles.form} onSubmit={onHandleSubmit}>
                    <label htmlFor="text">username</label>
                    <input id="text" name="username" type="text" placeholder="username" value={userName} required onChange={onHandleUserNameInput}/>
                    <label htmlFor="text">todo</label>
                    <input id="text" name="text" type="text" placeholder="todo" value={todo} onChange={onHandleTodoInput} required />
                    <input type="submit" value="Insert" />
   </form>


    </div>
  </div>
  </div>
  );
};

export default Modal;
