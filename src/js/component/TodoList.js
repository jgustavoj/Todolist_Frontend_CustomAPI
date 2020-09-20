import React, { useState } from "react";
import TodoItem from "./TodoItem";

export const TodoList = () => {
	const [todos, setTodos] = useState([
		{ action: " Pending Todo " },
		{ action: " Pending Todo2" }
	]);

	//const handleChange = e => {};

	return (
		<form>
			<label>
				To Do: <input type="text" name="todo" value={todos.action} />
			</label>
		</form>
	);
};
