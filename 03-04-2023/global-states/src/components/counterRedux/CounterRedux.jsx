import { useContext } from "react";
import { GlobalContext } from "../../store";
import "./index.css";

const CounterRedux = () => {
 
  const { state, dispatch } = useContext(GlobalContext);

  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="CounterRedux">
      <h2>Counter con Stato Globale</h2>
      <button className="increment" onClick={onHandleClick}>
        Increment
      </button>
      <h1>{state.value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        Decrement
      </button>
      <button className="reset" onClick={onHandleClick}>
        Reset
      </button>
    </div>
  );
};

export default CounterRedux;
