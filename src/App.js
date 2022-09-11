import React from "react";
import Head from "./components/face/Head";
import Form from "./components/form/Form";
import "./index.css";
import withSplashScreen from "./components/splash-screen/SplashScreenLoader";

function App() {
	return (
		<>
			<div className="container_app fade-in">
				<div className="container_form">
					<Form />
				</div>
				<div className="container_face">
					<Head />
				</div>
			</div>
		</>
	);
}
// export default App;
export default withSplashScreen(App);
