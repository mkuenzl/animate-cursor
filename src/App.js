import Face from "./components/Face";
import Form from "./components/form/Form";
import "./index.css";
import TextInput from "./components/form/TextInput";
import customRules from "./components/form/Rules";

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
