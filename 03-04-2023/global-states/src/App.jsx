import { useReducer } from "react";
import { GlobalContext, initialGlobalState } from "./store";
import { globalReducer } from "./store/reducers";
import CounterRedux from "./components/counterRedux";
import CounterUseState from './components/counterUseState'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

  return (
    <div className="App">
       <CounterUseState/>
       <GlobalContext.Provider value={{ state, dispatch }}>
        <CounterRedux />
      </GlobalContext.Provider>  
    </div>
  )
}

export default App
