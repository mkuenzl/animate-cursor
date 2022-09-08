import React from "react";
import "./Eye.css";

const Brow = ({ id, mood }) => {
	return <div className={mood} id={id}></div>;
};

export default Brow;
