import "./index.css";

const ToDoItem = ({ data }) => {
  return (
    <div className="toDo_item">
      <div className="text">
      <p>{data.todo}</p>
      <p className={` ${data.completed ? "checked" : "red"}`}>{ data.completed? "Done": "to Do!" }</p>
      </div>
    </div>
  );
};

export default ToDoItem;