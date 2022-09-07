import { React, useState } from "react";
import "../../face/features/Eye.css";

const ButtonSwapper = ({ name }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = (event) => {
		if (clicked) {
			setClicked(false);
			document.getElementById("leftEye").className = "eye-style-round";
			document.getElementById("rightEye").className = "eye-style-round";
			console.log("eye style: round");
		} else {
			setClicked(true);
			document.getElementById("leftEye").className = "eye";
			document.getElementById("rightEye").className = "eye";
			console.log("eye style: default");
		}
	};

	return (
		<div className="buttonSwapper">
			<button
				name={name}
				onClick={(event) => handleClick(event)}
				className={clicked ? "swapButton active" : "swapButton"}
			>
				{name}
			</button>
		</div>
	);
};

export default ButtonSwapper;
