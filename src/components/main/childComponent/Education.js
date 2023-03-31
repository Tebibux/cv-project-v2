import React, { Component } from "react";

class Education extends Component {
	render() {
		return (
			<div>
				<div className="userEducation">
				<div className="title">Education</div>
					<form >
						<input type="text" name="education" />
						<button>+</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Education;
