import React from "react"
import Header from "./components/header/Header";
import PostList from "./components/post/PostList";
import UsersList from "./components/users/UsersList";
import TodoList from "./components/Todo/TodoList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserId from "./components/users/UserId";
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
          <Route path="/users/UsersList/:userId" element={<UserId />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;