import Face from "./components/face/Face";
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
					<Face />
				</div>
			</div>
		</>
	);
}

export default App;
