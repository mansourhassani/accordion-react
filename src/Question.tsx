import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Questions = () => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<div className="question">
			<header>
				<h4>این سوال اول است</h4>
				<button onClick={() => setShowInfo(!showInfo)}>
					<AiOutlinePlus />
				</button>
			</header>
			{showInfo && <p>این محتوا است</p>}
		</div>
	);
};

export default Questions;
