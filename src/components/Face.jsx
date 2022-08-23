import React, { useEffect, useState } from "react";
import "./Face.css";
import Eye from "./features/Eye";
import Eyebrow from "./features/Eyebrow";
import Mouth from "./features/Mouth";

function Face() {
	const mousePosition = useMousePosition();

	return (
		<div className="container">
			<div className="face">
				{JSON.stringify(mousePosition)}
				<div className="eyebrows">
					<Eyebrow />
					<Eyebrow />
				</div>
				<div className="eyes">
					<Eye />
					<Eye />
				</div>
				<Mouth />
			</div>
		</div>
	);
}

export default Face;

function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });
	useEffect(() => {
		const updateMousePosition = (ev) => {
			const responsiveX = (ev.clientX / window.innerWidth).toFixed(2);
			const responsiveY = (ev.clientY / window.innerHeight).toFixed(2);

			const root = document.getElementById("root");

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
