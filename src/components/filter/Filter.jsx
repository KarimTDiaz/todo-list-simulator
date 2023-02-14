const Filter = ({ setFilter }) => {
	return (
		<div>
			<button onClick={() => setFilter(0)}>ALL</button>
			<button onClick={() => setFilter(1)}>COMPLETED</button>
			<button onClick={() => setFilter(2)}>ACTIVE</button>
		</div>
	);
};

export default Filter;
