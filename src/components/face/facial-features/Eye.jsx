import React from "react";
import "./Facial.css";

const Eye = ({ id }) => {
	return (
		<div className="eye-happy" id={id}>
			<div className="tracker"></div>
		</div>
	);
};

export default Eye;
