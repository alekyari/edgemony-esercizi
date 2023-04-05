import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { useContext } from "react";
import { Context } from "../../store";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {

//   Metodo con Fetch 
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     GET(`users/${taskData.userId}`).then((data) => setUserData(data));
//   }, []);

//   return (
//     <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
//       <div className={styles.info}>
//         <img src={userData.image} alt={userData.username} />
//         {taskData.completed && <button>V</button>}
//       </div>
//       <div className={styles.content}>
//         <span>{userData.username}</span>
//         <p>{taskData.todo}</p>
//       </div>
//     </div>
//   );
// };

// const { store, dispatch } = useContext(Context);

// const onHandleSetCompleted = () => {
//   dispatch({ type: "SET_TASK_COMPLETED", payload: taskData.id });
// };

// const onHandleDeleteTask = () => {
//   dispatch({ type: "DELETE_TASK", payload: taskData.id });
// };


return (
  <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
    <div className={styles.info}>
      <img src={taskData.image} alt={taskData.username} />
      {taskData.completed && <button>V</button>}
    </div>
    <div className={styles.content}>
      <span>{taskData.username}</span>
      <p>{taskData.todo}</p>
    </div>
  </div>
);
};

export default Task;
