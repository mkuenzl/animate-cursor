import Head from "./components/face/Head";
import Form from "./components/form/Form";
import "./index.css";

function App() {
	return (
		<>
			<div className="container_app">
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

export default App;
