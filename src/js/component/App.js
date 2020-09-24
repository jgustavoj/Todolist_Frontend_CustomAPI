import React from "react";
import { TodoList } from "./TodoList";

export const App = () => {
	return (
		<>
			<h1 className="Header">Todo List</h1>
			<div className="Content">
				<TodoList />
			</div>
		</>
	);
};
