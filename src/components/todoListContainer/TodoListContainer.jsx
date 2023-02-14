import TodoList from '../todoList/TodoList';
import Form from '../form/Form';
import Filter from '../filter/Filter';
import { useState } from 'react';

const TodoListContainer = () => {
	const [allTasks, setAllTasks] = useState([]);
	const [filter, setFilter] = useState(0);
	return (
		<>
			<Form
				allTasks={allTasks}
				setAllTasks={setAllTasks}
				filter={filter}
				setFilter={setFilter}
			/>
			<TodoList allTasks={allTasks} setAllTasks={setAllTasks} filter={filter} />
			<Filter setFilter={setFilter} />
		</>
	);
};

export default TodoListContainer;
