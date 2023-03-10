import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import MyCards from "./pages/MyCards";
import Profile from "./pages/Profile";

const myCards = ["Visa", "Mastecard", "UzCard"]

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home/>}  />
			<Route path="/me" element={<Layout/>} >
				<Route path="profile" element={<Profile myCards={myCards} />}  />
				<Route path="mycards" element={<MyCards/>}  />
			</Route>
		</Routes>
	);
}



export default App;
