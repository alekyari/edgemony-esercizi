import "./index.css";

const ToDoItem = ({ item, setList }) => {
  const onHandleClick = () => {
    setList((prev) => 
      prev.filter((todo) => todo.id !== item.id)
    );
  };
  return (
    <div className="toDo_item" onClick={onHandleClick}>
      <div className="text">
      <p>{item.todo}</p>
      <p className={` ${item.completed ? "checked" : "red"}`}>{ item.completed? "Done": "to Do!" }</p>
      </div>
    </div>
  );
};

export default ToDoItem;