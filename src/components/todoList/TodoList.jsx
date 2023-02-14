import Task from '../task/Task';

const TodoList = ({ allTasks, setAllTasks, filter }) => {
	console.log(filter);
	if (filter === 0) {
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
	} else if (filter === 1) {
		const filteredArray = allTasks.filter(task => task.checked);
		return filteredArray.map(task => {
			return (
				<Task
					key={task.id}
					allTasks={allTasks}
					task={task}
					setAllTasks={setAllTasks}
				/>
			);
		});
	} else if (filter === 2) {
		const filteredArray = allTasks.filter(task => !task.checked);
		return filteredArray.map(task => {
			return (
				<Task
					key={task.id}
					allTasks={allTasks}
					task={task}
					setAllTasks={setAllTasks}
				/>
			);
		});
	}
};

export default TodoList;
