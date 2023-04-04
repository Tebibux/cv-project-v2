import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div className="userSkill">
				<div className="title">Skill</div>
				<ul>
					<li>hi</li>
				</ul>
				<div className="user-skill-dic" >
					<input type="text" name="userSkill"/>
					<button>+</button>
				</div>
			</div>
		);
	}
}

export default Skill;
