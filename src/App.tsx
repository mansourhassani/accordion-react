import { useState } from 'react';
import Questions from './Question';
import data from './data';
function App() {
	const [question, setQuestion] = useState(data);

	return (
		<div className="container">
			<h3>سوالی برایتان پیش آمده؟</h3>
			<div className="info">
				{question.map((question, index) => {
					return <Questions key={index} {...question} />;
				})}
			</div>
		</div>
	);
}

export default App;
