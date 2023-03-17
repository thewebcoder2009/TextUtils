import { useState } from "react";
import React from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
	const [navMode, setNavMode] = useState('light') 
	const [alert, setAlert] = useState(null)

	const showAlert = (msg, type) => {
		setAlert({
			message: msg,
			type: type
		})
		setTimeout(() => {
			setAlert(null)
		}, 2800);
	}

	const changeTheme = (theme) => {
		if(theme === "primary") {
			setMode('primary')
			document.body.style.backgroundColor = '#0B5ED7'
			showAlert("Blue theme has been enabled", "success")
		} else if(theme === "secondary") {
			setMode('secondary')
			document.body.style.backgroundColor = '#5C636A'
		 	showAlert("Gray theme has been enabled", "success")
		} else if(theme === "success") {
			setMode('success')
			document.body.style.backgroundColor = '#157347'
		 	showAlert("Green theme has been enabled", "success")
		} else if(theme === "danger") {
			setMode('danger')
			document.body.style.backgroundColor = '#BB2D3B'
		 	showAlert("Red theme has been enabled", "success")
		} else if(theme === "warning") {
			setMode('warning')
			document.body.style.backgroundColor = '#FFCA2C'
		 	showAlert("Yellow theme has been enabled", "success")
		} else if(theme === "info") {
			setMode('info')
			document.body.style.backgroundColor = '#31D2F2'
		 	showAlert("Light Blue theme has been enabled", "success")
		} else if(theme === "light") {
			setMode('light')
			setNavMode('light')
			document.body.style.backgroundColor = 'white'
			showAlert("Light theme has been enabled", "success")
		} else if(theme === "dark") {
			setMode('dark')
			setNavMode('dark')
			document.body.style.backgroundColor = '#343a40'
		 	showAlert("Dark theme has been enabled", "success")
		}
	}
	return (
		<>
		<Router>
			<Navbar title="TextUtils" mode={mode} navMode={navMode} changeTheme={changeTheme} />
			<Alert alert={alert} />
			<div className="container my-3">
				<Routes>
					<Route exact path="/about" element={<About mode={mode} switchMode={setMode} />} />
					<Route exact path="/" element={<TextForm heading="Welcome to TextUtils: The Word & Character counter" alert={showAlert} mode={mode} />} />
				</Routes>
			</div>
		</Router>
		</>
	);
}

export default App;
