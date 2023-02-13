import Task from '../task/Task';

const TodoList = ({ allTasks, setAllTasks }) => {
	return allTasks.map(task => {
		return (
			<Task
				key={task.id}
				allTasks={allTasks}
				task={task}
				setAllTasks={setAllTasks}
			/>
		);
	});
};

export default TodoList;
