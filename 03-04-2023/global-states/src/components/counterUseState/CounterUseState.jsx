import "./index.css";
import {useState} from "react";

const CounterUseState = () => {

const [value, setValue] = useState(0)

const onHandleClick = (e) => {e.target.className === "Increment"? setValue((prev)=> prev+1) : setValue((prev)=> prev-1) }
    return(
        <div className="CounterUseState">
             <h2>Counter con useState</h2>
            <button className="Increment" onClick={onHandleClick}>
            Increment
            </button>
            <h1>{value}</h1>
            <button className="Decrement" onClick={onHandleClick}>
            Decrement
            </button>
        </div>
    )
}

export default CounterUseState;