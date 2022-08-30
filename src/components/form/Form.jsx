import React, { Component } from "react";
import "../../index.css";

export class Form extends Component {
	render() {
		const update = (value, cssVariable) => {
			const root = document.getElementById("root");

			root.style.setProperty(cssVariable, value);
		};

		return (
			<div className="input_form">
				<form action="">
					<div className="container_form-label">
						<input
							type="text"
							name="width"
							minLength="3"
							maxLength="20"
							placeholder="width"
							required
							onChange={(e) => update(e.target.value, "--width")}
						/>
					</div>
					{/* <TextInput id="email" customRules={customRules} validate="weirdRule" />
                            <TextInput id="userName" validate="numeric" /> */}
				</form>
			</div>
		);
	}
}

export default Form;
