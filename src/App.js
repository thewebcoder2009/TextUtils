import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
		}, 2000);
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
		<Navbar title="TextUtils" mode={mode} navMode={navMode} changeTheme={changeTheme} />
		<Alert alert={alert} />
		<div className="container my-3">
			<TextForm heading="Enter the text below to analyze" alert={showAlert} mode={mode} />
			{/* <About /> */}
		</div>
		</>
	);
}

export default App;
