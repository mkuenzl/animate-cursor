import React from "react";
import "./Facial.css";

const Eyebrow = ({ id, mood }) => {
	return <div className={mood} id={id}></div>;
};

export default Eyebrow;
