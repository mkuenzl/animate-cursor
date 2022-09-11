import { React, useState } from "react";
import "../../face/facial-features/Facial.css";
import "./Button.css";

const ButtonSwapper = ({ name }) => {
	const [clicked, setClicked] = useState(false);

	const handleClick = (event) => {
		if (clicked) {
			setClicked(false);
			document.getElementById("leftEye").className = "eye-happy";
			document.getElementById("rightEye").className = "eye-happy";
			document.getElementById("mouth").className = "happy";
			document.getElementById("leftBrow").className = "brow-happy";
			document.getElementById("rightBrow").className = "brow-happy";
			console.log("eye style: round");
		} else {
			setClicked(true);
			document.getElementById("leftEye").className = "eye-surprised";
			document.getElementById("rightEye").className = "eye-surprised";
			document.getElementById("mouth").className = "surprised";
			document.getElementById("leftBrow").className = "brow-left-surprised";
			document.getElementById("rightBrow").className = "brow-right-surprised";

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
