import React from "react"
import Header from "./store/components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./store/components/Home/Home"
import UserId from "./store/components/users/UserId";
import "./App.scss"

const App = () => {
	return (
		<div className="wrapper">
			<div className="wrap__navAndList">
				<Router>
					<Header />
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/:UserId" exact element={<UserId />} />
					</Routes>
				</Router>
			</div>
		</div>
	)
}

export default App;