import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div className="skill">
				<div className="title">Skill</div>
				<form >
					<input type="text" name="userSkill"/>
					<button>+</button>
				</form>
			</div>
		);
	}
}

export default Skill;
