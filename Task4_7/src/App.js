import React from "react"
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserId from "./components/users/UserId";
import UsersList from "./components/users/UsersList";
import "./App.scss"

const App = () => {
    return (
        <div className="wrapper">
            <div className="wrap__list">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/UsersList" element={<UsersList />} />
                        <Route path="/:userId" element={<UserId />} />
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default App;