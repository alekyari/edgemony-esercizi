import { useContext, useState} from "react";
import { Context } from "../../store";
import styles from "./index.module.scss";

const Modal = () => {
  const { state, dispatch } = useContext(Context);
  
// Metodo con useState e Global State

//   const [username, setUserName] = useState("");
//   const [todo, setTodo] = useState("");


//   const onHandleUserNameInput = (e) => setUserName(e.target.value);
//   const onHandleTodoInput = (e) => setTodo(e.target.value);


//   const onHandleSubmit = (e) => {e.preventDefault();  onHandleNewTask() };

//   const onHandleCloseModal = () => {
//     dispatch({ type: "SET_MODAL_OFF" })

//    }

//    const onHandleNewTask = () => {
//     dispatch({type: 'CREATE_NEW_TASK', payload: {
//       "id": `${state.tasksListData.length + 1 }`,
//       "todo": todo,
//       "completed": true,
//       "username": username,
//       "image": "https://picsum.photos/200?random=1",
//     }})

//   }

 

 

//   return (
   
//    <div className={styles.Modal}>
//    <div className={styles.Modal_Overlay} onClick={onHandleCloseModal}>    </div>
//     <div className={styles.Modal_Main}> 
//     <button onClick={onHandleCloseModal} className={styles.Modal_Button}>X</button>
//     <h1>Modal Todo</h1>
//     <form className={styles.form} onSubmit={onHandleSubmit}>
//                     <label htmlFor="text">username</label>
//                     <input id="text" name="username" type="text" placeholder="username" value={username} required onChange={onHandleUserNameInput}/>
//                     <label htmlFor="text">todo</label>
//                     <input id="text" name="text" type="text" placeholder="todo" value={todo} onChange={onHandleTodoInput} required />
//                     <input type="submit" value="Insert" />
//    </form>


//     </div>
//   </div>
//   );
//


  const onHandleCloseModal = () => {
    dispatch({ type: "SET_MODAL_OFF" })

   }



const onHandleSubmit = (e) => {
e.preventDefault();
dispatch({ type: "ADD_NEW_TASK", payload: state.tempTodo });
dispatch({ type: "SET_MODAL_OFF", payload: false });
alert(state.tempTodo.id)
};

const onChangeInputUsername = (e) =>
dispatch({ type: "SET_TEMP_TODO_USERNAME", payload: e.target.value });

const onChangeInputTodo = (e) => {
dispatch({ type: "SET_TEMP_TODO_TODO", payload: e.target.value });
dispatch({ type: "SET_TEMP_TODO_ID" });}


return (
  
   <div className={styles.Modal}>
   <div className={styles.Modal_Overlay} onClick={onHandleCloseModal}>    </div>
    <div className={styles.Modal_Main}> 
    <button onClick={onHandleCloseModal} className={styles.Modal_Button}>X</button>
    <h1>Modal Todo</h1>
    <form className={styles.form} onSubmit={onHandleSubmit}>
                    <label htmlFor="text">username</label>
                    <input id="text" name="username" type="text" placeholder="username" value={state.tempTodo.username} required onChange={onChangeInputUsername}/>
                    <label htmlFor="text">todo</label>
                    <input id="text" name="text" type="text" placeholder="todo" value={state.tempTodo.todo} onChange={onChangeInputTodo} required />
                    <input type="submit" value="Insert" />
   </form>


    </div>
  </div>


)
};

export default Modal;
