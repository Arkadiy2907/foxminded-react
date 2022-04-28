import React from "react"
import Header from "./store/components/header/Header";
import PostList from "./store/components/post/PostList";
import UsersList from "./store/components/users/UsersList";
import TodoList from "./store/components/Todo/TodoList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Todo/TodoList" element={<TodoList />} />
          <Route path="/post/PostList" element={<PostList />} />
          <Route path="/users/UsersList" element={<UsersList />} />          
        </Routes>
      </Router>
    </>
  )
}

export default App;