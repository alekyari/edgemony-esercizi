import { useReducer } from "react";
import { useContext } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from "./components/modal";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  // const { state, dispatch } = useContext(Context);
  
  const onHandleClick = () => {
    dispatch({ type: "SET_MODAL_ON"})

   }
    
   ;

  

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        {state.isModalVisibile && <Modal/>}
        <button onClick={onHandleClick} className={styles.addTodo}>{"+"}</button>
      </Context.Provider>
    </div>
  );
}

export default App;
