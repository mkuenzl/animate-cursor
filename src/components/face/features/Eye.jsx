import React from "react";
import "./Eye.css";

const Eye = ({ id }) => {
	return (
		<div className="eye" id={id}>
			<div className="tracker"></div>
		</div>
	);
};

export default Eye;
