import React, { useState } from "react";
import './App.css';
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

function App() {
	
	const [userName, setUserName] = useState({
		person: [
			{name: "Krishna"}
		]
	});

	const changeNamehandler = (event) => {
		console.log("inside input change handler");
		setUserName({
			person: [
				{name: event.target.value}
			]
		});
	}

	// const changeUsernameHandler = (event) => {
	// 	alert("inside handler");
	// 	setUserName({
	// 		userName: "KT"
	// 	});
	// }

	return (
		<div className="App">
			<UserInput changed={changeNamehandler} name={userName.person[0].name}/>
			<UserOutput paraNum={1} name={userName.person[0].name}/>
			<UserOutput paraNum={2} name={userName.person[0].name}/>
			<UserOutput paraNum={3} name="K"/>
		</div>
	);
}

export default App;
