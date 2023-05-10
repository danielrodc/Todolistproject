import React, { useState } from "react";

//create your first component
const Home = () => {

	const [inputValue, setInputValue]=useState("");
	const [todos, SetTodos]=useState([]);

	return ( 

		<><div className="container">
			<h1>My To do List</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.Key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						} }
						placeholder="Add your task here?">
					</input>
				</li>
				{todos.map((_item, index) => (
					<li>
						<i
							class="fas fa-trash-alt"
							onClick={() => setTodos(
								todos.filter(
									(t, currentIndex) => Index != currentIndex
								)
							)} /></i>))}
			</li>
			))}
		</ul><div> {todos.lenght} Tasks </div></>
		</div>

		
export default Home;
