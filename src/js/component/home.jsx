import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => {
		setTodos(todos.filter((_, currentIndex) => currentIndex !== index));
	};

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							console.log("key was pressed", e.key);
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue(""); // Limpiar el campo de entrada
							}
						}}
						placeholder="What do you need to do?"></input>
				</li>
				{todos.length === 0 ? (
					<li>No hay tareas, añadir tareas.</li>
				) : (
					todos.map((todo, index) => (
						<li key={index}>
							{todo}{" "}
							<i
								className="fa-solid fa-trash-can"
								onClick={() => handleDelete(index)}
							></i>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Home;
