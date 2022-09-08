import React, { Component } from "react";
import "./Form.css";
import ButtonGroup from "./utility/ButtonGroup";
import ButtonSwapper from "./utility/ButtonSwapper";

export class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { unitTypes: ["vw", "px"], unit: "vw", width: "40" };
	}

	render() {
		//let activeType = unitTypes[0];

		const update = (value, measure, cssVariable) => {
			const root = document.getElementById("root");
			this.setState({ width: value });
			root.style.setProperty(cssVariable, value + measure);
		};

		const setActiveType = (event) => {
			this.setState({ measurement: event.target.name });
			update(this.state.width, event.target.name, "--width");
			// console.log(event.target.name);
		};

		return (
			<div className="input_form">
				<ButtonSwapper name="Mood" />
				<form action="">
					<div className="container_form-label">
						<input
							type="text"
							name="width"
							minLength="3"
							maxLength="20"
							placeholder="40"
							onChange={(e) => update(e.target.value, this.state.unit, "--width")}
						/>
					</div>
					{/* <TextInput id="email" customRules={customRules} validate="weirdRule" />
                            <TextInput id="userName" validate="numeric" /> */}
				</form>
				<ButtonGroup buttons={this.state.unitTypes} handleClickFunction={setActiveType} />
			</div>
		);
	}
}

export default Form;
