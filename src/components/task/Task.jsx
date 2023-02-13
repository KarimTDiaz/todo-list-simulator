const Task = ({ id, task, allTasks, setAllTasks }) => {
	return (
		<div>
			<input
				id={task.id}
				type='checkbox'
				onChange={() => checkTask(task.id, allTasks, setAllTasks)}
			/>
			<label htmlFor={task.id}>{task.task}</label>
			<span onClick={() => removeTask(task.id, allTasks, setAllTasks)}>X</span>
		</div>
	);
};

const checkTask = (id, allTasks, setAllTasks) => {
	const newTasks = allTasks.map(task => {
		if (id === task.id) {
			task.checked = !task.checked;
		}
		return task;
	});

	setAllTasks(newTasks);
};

const removeTask = (id, allTasks, setAllTasks) => {
	const newTasks = allTasks.filter(task => task.id !== id);
	setAllTasks(newTasks);
};

export default Task;
