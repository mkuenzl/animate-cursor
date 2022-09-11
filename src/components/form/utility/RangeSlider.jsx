import React, { memo, useState, useEffect } from "react";

const RangeSlider = memo(({ classes, onChange, value, ...sliderProps }) => {
	const [sliderVal, setSliderVal] = useState(40);

	useEffect(() => {
		setSliderVal(value);
	}, [value]);

	const changeCallback = (e) => {
		setSliderVal(e.target.value);
	};

	useEffect(() => {
		onChange(sliderVal);
	}, [sliderVal, onChange]);
	console.log("RENDER");

	return (
		<div className="range-slider">
			<input
				type="range"
				value={sliderVal}
				{...sliderProps}
				className={`slider ${classes}`}
				id="myRange"
				onChange={changeCallback}
			/>
		</div>
	);
});

export default RangeSlider;
