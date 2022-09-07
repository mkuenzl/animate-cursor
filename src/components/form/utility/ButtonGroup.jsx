import React, { useState } from "react";
import "./Button.css";

// const type = ["px", "vw", "em", "%"];

const ButtonGroup = ({ buttons, handleClickFunction }) => {
	// make first button selected otherwise useState(-1)
	const [clickedId, setClickedId] = useState(0);

	const handleClick = (event, id) => {
		setClickedId(id);
		handleClickFunction(event);
	};

	return (
		<div className="buttonGroup">
			{buttons.map((buttonLabel, id) => {
				return (
					<button
						key={id}
						name={buttonLabel}
						onClick={(event) => handleClick(event, id)}
						className={id === clickedId ? "customButton active" : "customButton"}
					>
						{buttonLabel}
					</button>
				);
			})}
		</div>
	);
};

export default ButtonGroup;
