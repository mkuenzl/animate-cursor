import React, { useEffect, useState } from "react";
import "./Head.css";
import Eye from "./facial-features/Eye";
import Eyebrow from "./facial-features/Eyebrow";
import Mouth from "./facial-features/Mouth";

let containerCenterPositionX = 0;
let containerCenterPositionY = 0;

function Head() {
	const [clicked, setClicked] = useState(false);

	useMousePosition();
	return (
		<div className="container__head" onClick={(event) => handleClick(event, clicked, setClicked)}>
			<div className="head" ref={setPosition}>
				<div className="eyebrows">
					<Eyebrow id="leftBrow" mood="brow-happy" />
					<Eyebrow id="rightBrow" mood="brow-happy" />
				</div>
				<div className="eyes">
					<Eye id="leftEye" />
					<Eye id="rightEye" />
				</div>
				<div className="mouths">
					<Mouth />
				</div>
			</div>
		</div>
	);
}

export default Head;

// TODO implement so that function is only called once
function setPosition(el) {
	// el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
	if (!el) return;

	const responsiveX = (el.getBoundingClientRect().x / window.innerWidth).toFixed(2);
	const responsiveY = (el.getBoundingClientRect().y / window.innerHeight).toFixed(2);

	console.log("height of window: " + window.innerHeight);

	const containerCenterX = (el.getBoundingClientRect().width / 2 / window.innerWidth + Number(responsiveX)).toFixed(2);
	console.log("center of face: x = " + containerCenterX);

	const containerCenterY = (el.getBoundingClientRect().width / 2 / window.innerHeight + Number(responsiveY)).toFixed(2);
	console.log("center of face: y = " + containerCenterY);

	const root = document.getElementById("root");

	root.style.setProperty("--positionX", containerCenterX);
	root.style.setProperty("--positionY", containerCenterY);

	containerCenterPositionX = containerCenterX;
	containerCenterPositionY = containerCenterY;
}

function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });
	useEffect(() => {
		const updateMousePosition = (ev) => {
			// add logarithmic function

			const responsiveX = (ev.clientX / window.innerWidth - containerCenterPositionX).toFixed(2);
			const responsiveY = (ev.clientY / window.innerHeight - containerCenterPositionY).toFixed(2);

			//const logX = ((1.5 ^ responsiveX) - 1) / (1.5 - 1);

			const root = document.getElementById("root");

			console.log("relative mouse position: x = " + responsiveX);
			console.log("relative mouse position: y = " + responsiveY);

			root.style.setProperty("--x", responsiveX);
			root.style.setProperty("--y", responsiveY);

			setMousePosition({ x: responsiveX, y: responsiveY });
		};
		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return mousePosition;
}

function handleClick(event, clicked, setClicked) {
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

	return event;
}
