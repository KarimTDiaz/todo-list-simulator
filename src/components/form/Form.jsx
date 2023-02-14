import { useState } from 'react';

const Form = ({ allTasks, setAllTasks, setFilter }) => {
	const [task, setTask] = useState('');

	return (
		<>
			<form
				onSubmit={e => handleSubmit(e, task, setTask, allTasks, setAllTasks)}
			>
				<input
					type='text'
					onChange={e => handleChange(e.target.value, setTask)}
					value={task}
				/>
			</form>
		</>
	);
};

const handleSubmit = (e, task, setTask, allTasks, setAllTasks) => {
	e.preventDefault();

	const newTask = {
		id: Date.now(),
		task,
		checked: false
	};

	setAllTasks([...allTasks, newTask]);
	setTask('');
};

const handleChange = (value, setTask) => {
	setTask(value);
};

export default Form;
