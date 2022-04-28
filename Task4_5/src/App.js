import React from "react"
import ToDoComponent from "./store/components/Todo/ToDoComponent"
import "./App.scss"

const App = () => {
  return (
    <>
      <React.StrictMode>
        <ToDoComponent />
      </React.StrictMode>
    </>
  )
}

export default App;