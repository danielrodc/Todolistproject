import React, { useState } from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	
	return (

		<div className="container">
			<h1>My To do List</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="Add your task here?">
					</input>
				</li>
				{todos.map((_item, index) => (
					<li key={index}>
						<span>{_item}</span>
						<i
							className="fas fa-trash-alt"
							onClick={() => setTodos(
								todos.filter(
									(t, currentIndex) => index != currentIndex
								)
							)} ></i>
					</li>))}
			</ul>
			<div>  Tasks {todos.length}</div>
		</div>
	)
								}
	export default Home;
