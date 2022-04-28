import React from "react"
import './scss/style.scss'
import { useSelector } from "react-redux"
import AddComponent from "./store/components/addComponent"
import SubtractComponent from "./store/components/subtractComponent"
import ResertComponent from "./store/components/resetComponent"

function App() {
  const count = useSelector(state => state.count)

  return (
    <div className="wrap">
      <div>
        <AddComponent />
        <SubtractComponent />
        <ResertComponent />
        <h3>Number: <span className="counter">{count}</span></h3>
      </div>
    </div>
  )
}

export default App;
