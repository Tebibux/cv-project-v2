import React, { Component } from "react";

class Experience extends Component {
	render() {
		return (
			<div className="Experience">
				<div className="title">Experience</div>
				<form >
					<input type="text" name="userExperience" />
					<button>+</button>
				</form>
			</div>
		);
	}
}

export default Experience;
