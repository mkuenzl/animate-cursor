import React, { useState, useCallback, useMemo } from "react";
import "./Form.css";
import ButtonSwapper from "./utility/ButtonSwapper";
import RangeSlider from "./utility/RangeSlider";

const Form = () => {
	// initial slider setting
	const [parentVal, setParentVal] = useState(40);

	const sliderValueChanged = useCallback((val) => {
		const root = document.getElementById("root");
		root.style.setProperty("--width", `${val}vw`);
		setParentVal(val);
	}, []);

	const sliderProps = useMemo(
		() => ({
			min: 5,
			max: 45,
			value: parentVal,
			step: 1,
			onChange: (e) => sliderValueChanged(e),
		}),
		[parentVal, sliderValueChanged]
	);

	return (
		<div className="input_form">
			<ButtonSwapper name="Mood" />
			<form action="">
				<div className="container_form-label">
					<RangeSlider {...sliderProps} classes="additional-css-classes" />
				</div>
			</form>
		</div>
	);
};

export default Form;
