import React from "react";
import { TodoList } from "./TodoList";

export const App = () => {
	return (
		<>
			<h1 className="Header">Todos</h1>
			<div className="Content">
				<TodoList />
			</div>
		</>
	);
};
