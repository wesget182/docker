import { useState } from "react";

function App(): JSX.Element {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 2);
	};

	const decrement = () => {
		setCount(count - 1);
	};
	return (
		<>
			<div>
				<h3>Button Incrementer bullshit</h3>
				<p>{count}</p>
			</div>

			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
		</>
	);
}

export default App;
