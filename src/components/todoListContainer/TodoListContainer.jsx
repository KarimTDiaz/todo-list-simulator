import TodoList from '../todoList/TodoList';
import Form from '../form/Form';
import { useState } from 'react';

const TodoListContainer = () => {
	const [allTasks, setAllTasks] = useState([]);
	return (
		<>
			<Form allTasks={allTasks} setAllTasks={setAllTasks} />
			<TodoList allTasks={allTasks} setAllTasks={setAllTasks} />
		</>
	);
};

export default TodoListContainer;
