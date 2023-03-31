import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div>
				<div className="title">Skill</div>
				<form >
					<input type="text" name="userSkill" id="" />
					<button>+</button>
				</form>
			</div>
		);
	}
}

export default Skill;
