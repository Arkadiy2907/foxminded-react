import React from "react"
import PostList from "./store/components/Post/PostList"
import "./App.scss"

const App = () => {
  return (
    <>
      <React.StrictMode>
        <PostList />
      </React.StrictMode>
    </>
  )
}

export default App;