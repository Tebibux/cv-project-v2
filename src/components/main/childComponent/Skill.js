import React, { Component } from "react";

class Skill extends Component {
	render() {
		return (
			<div className="userSkill">
				<div className="title">Skill</div>
				<ul>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Nam beatae numquam, </li>
				</ul>
				<div className="user-skill-dic" >
					<input type="text" name="userSkill" placeholder="Add your skills here"/>
					<button className="btn-add">Add</button>
				</div>
			</div>
		);
	}
}

export default Skill;
