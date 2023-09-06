import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Questions = (prop: any) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<div className="question">
			<header>
				<h4>{prop.title}</h4>
				<button onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{prop.info}</p>}
		</div>
	);
};

export default Questions;
